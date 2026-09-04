-- Remove categories: swimming, boxing, cycling, team_sports (everywhere)

-- Drop order items that reference products in these categories, then the products
DELETE FROM order_items
WHERE product_id IN (
  SELECT id FROM products
  WHERE category IN ('swimming', 'boxing', 'cycling', 'team_sports')
);

DELETE FROM products
WHERE category IN ('swimming', 'boxing', 'cycling', 'team_sports');

-- Safety net: remap anything left on a removed category
UPDATE products SET category = 'general'
WHERE category IN ('swimming', 'boxing', 'cycling', 'team_sports');

-- Tighten the category constraint to the remaining set
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;
ALTER TABLE products ADD CONSTRAINT products_category_check
  CHECK (category = ANY (ARRAY[
    'cardio','strength','yoga','running','outdoor',
    'clothing','footwear','nutrition','accessories',
    'protection','general'
  ]));
