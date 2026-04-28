-- Remove sports nutrition products
DELETE FROM products WHERE category = 'nutrition';

-- Update category constraint to exclude 'nutrition'
ALTER TABLE products
DROP CONSTRAINT products_category_check;

ALTER TABLE products
ADD CONSTRAINT products_category_check
CHECK (category IN ('vegetables', 'chemistry', 'general'));
