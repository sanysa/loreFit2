-- Categories become admin-manageable instead of a hardcoded list.
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  image_url TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_hidden BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed with the current 4 storefront blocks, plus a hidden internal fallback
-- ("general") used for products whose category gets deleted.
INSERT INTO categories (key, label, image_url, sort_order, is_hidden) VALUES
  ('accessories', 'Аксессуары',      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=75', 1, false),
  ('clothing',    'Одежда',          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=75', 2, false),
  ('bestsellers', 'Бестселлеры',     'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=75', 3, false),
  ('outdoor',     'Активный отдых',  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=75', 4, false),
  ('general',     'Общее',           '', 999, true)
ON CONFLICT (key) DO NOTHING;

-- Replace the fixed CHECK constraint with a foreign key against categories.key,
-- so validity is driven by the table admins now manage instead of a hardcoded list.
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;
ALTER TABLE products
  ADD CONSTRAINT products_category_fkey
  FOREIGN KEY (category) REFERENCES categories(key)
  ON UPDATE CASCADE;
