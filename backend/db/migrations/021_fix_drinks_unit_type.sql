ALTER TABLE products DROP CONSTRAINT IF EXISTS products_unit_type_check;
ALTER TABLE products ADD CONSTRAINT products_unit_type_check
  CHECK (unit_type = ANY (ARRAY['piece','kg','ml','g','l']));

UPDATE products SET unit_type = 'l' WHERE category = 'drinks' AND unit_type = 'piece';
UPDATE products SET unit_type = 'l' WHERE unit_type = 'ml';
