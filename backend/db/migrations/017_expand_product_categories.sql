-- Remap legacy categories that won't satisfy the new constraint
UPDATE products SET category = 'chemistry'  WHERE category = 'nutrition';
UPDATE products SET category = 'vegetables' WHERE category = 'equipment';
UPDATE products SET category = 'general'
  WHERE category NOT IN (
    'meat','sausage','fish','pasta','sweets','frozen','spices',
    'tea_coffee','ready_food','kids','home','pets','dairy',
    'vegetables','bread','drinks','baking','oils','canned',
    'snacks','alcohol','chemistry','cosmetics','general'
  );

ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;

ALTER TABLE products
ADD CONSTRAINT products_category_check
CHECK (category IN (
  'meat','sausage','fish','pasta','sweets','frozen','spices',
  'tea_coffee','ready_food','kids','home','pets','dairy',
  'vegetables','bread','drinks','baking','oils','canned',
  'snacks','alcohol','chemistry','cosmetics','general'
));
