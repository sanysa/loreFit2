-- Reset the catalog down to 4 blocks: accessories, clothing, bestsellers, outdoor.
-- accessories keeps only "Бутылка", adds "Шопер".
-- clothing keeps only "Топ" and "Шорты", adds "Леггинсы" and "Худи".
-- bestsellers is a new (currently empty) category the admin can assign products to.
-- outdoor (Активный отдых) is left untouched.

-- Safety: drop any order_items pointing at products we're about to remove
DELETE FROM order_items
WHERE product_id IN (
  SELECT id FROM products
  WHERE category IN ('cardio','strength','yoga','running','footwear','nutrition','protection')
     OR (category = 'accessories' AND name <> 'Бутылка для воды 750 мл')
     OR (category = 'clothing' AND name NOT IN ('Компрессионные шорты Under Armour','Спортивный топ женский Nike'))
);

-- Drop entire categories that are no longer part of the catalog
DELETE FROM products
WHERE category IN ('cardio','strength','yoga','running','footwear','nutrition','protection');

-- Trim accessories down to just the bottle
DELETE FROM products
WHERE category = 'accessories' AND name <> 'Бутылка для воды 750 мл';

-- Trim clothing down to just the top and the shorts
DELETE FROM products
WHERE category = 'clothing' AND name NOT IN ('Компрессионные шорты Under Armour', 'Спортивный топ женский Nike');

-- Add the missing named items
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Шопер эко-сумка', 'accessories', 'Плотная хлопковая сумка-шопер, длинные ручки, вмещает форму и обувь', 3500, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80'], true, 0, false, '', 3500),
('Леггинсы спортивные женские', 'clothing', 'Эластичная плотная ткань, высокая посадка, не просвечивают', 9500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80'], true, 7900, true, '', 9500),
('Худи спортивное', 'clothing', 'Тёплый хлопковый худи с капюшоном, унисекс', 14000, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80'], true, 0, false, '', 14000);

-- Safety net: anything left with a category that's about to become invalid falls back to general
UPDATE products SET category = 'general'
WHERE category NOT IN ('accessories','clothing','outdoor','bestsellers','general');

-- Tighten the category constraint to the 4 catalog blocks (+ internal fallback)
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;
ALTER TABLE products ADD CONSTRAINT products_category_check
  CHECK (category = ANY (ARRAY['accessories','clothing','outdoor','bestsellers','general']));
