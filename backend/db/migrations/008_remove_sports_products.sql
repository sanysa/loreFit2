-- Remove sports/equipment products
DELETE FROM products WHERE category = 'equipment';

-- Update category constraint to exclude 'equipment'
ALTER TABLE products
DROP CONSTRAINT products_category_check;

ALTER TABLE products
ADD CONSTRAINT products_category_check
CHECK (category IN ('nutrition', 'vegetables', 'chemistry', 'general'));
