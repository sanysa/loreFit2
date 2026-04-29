-- Add discount fields to products table
ALTER TABLE products
ADD COLUMN IF NOT EXISTS discount_price_kzt NUMERIC(12, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS use_discount BOOLEAN NOT NULL DEFAULT FALSE;
