ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;

ALTER TABLE products
ADD CONSTRAINT products_category_check
CHECK (category IN (
  'meat','sausage','fish','pasta','sweets','frozen','spices',
  'tea_coffee','ready_food','kids','home','pets','dairy',
  'vegetables','bread','drinks','baking','oils','canned',
  'snacks','alcohol','chemistry','cosmetics','general'
));
