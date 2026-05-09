ALTER TABLE products
ADD COLUMN IF NOT EXISTS base_price_kzt NUMERIC(12,2) DEFAULT 0;

UPDATE products SET base_price_kzt = price_kzt WHERE base_price_kzt = 0;
