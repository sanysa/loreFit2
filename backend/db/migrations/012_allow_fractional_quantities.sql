ALTER TABLE order_items
  DROP CONSTRAINT IF EXISTS order_items_quantity_check;

ALTER TABLE order_items
  ALTER COLUMN quantity TYPE NUMERIC(12,3) USING quantity::numeric;

ALTER TABLE order_items
  ADD CONSTRAINT order_items_quantity_check CHECK (quantity > 0);

ALTER TABLE products
  DROP CONSTRAINT IF EXISTS products_stock_quantity_check;

ALTER TABLE products
  ALTER COLUMN stock_quantity TYPE NUMERIC(12,3) USING stock_quantity::numeric;

ALTER TABLE products
  ADD CONSTRAINT products_stock_quantity_check CHECK (stock_quantity >= 0);
