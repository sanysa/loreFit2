-- Add unit_type column to products for handling different measurement units
ALTER TABLE products
ADD COLUMN IF NOT EXISTS unit_type TEXT NOT NULL DEFAULT 'piece';

-- Update category constraint to include new categories
ALTER TABLE products
DROP CONSTRAINT IF EXISTS products_category_check;

ALTER TABLE products
ADD CONSTRAINT products_category_check
CHECK (category IN ('equipment', 'nutrition', 'vegetables', 'chemistry', 'general'));

-- Add unit_type constraint
ALTER TABLE products
ADD CONSTRAINT products_unit_type_check
CHECK (unit_type IN ('piece', 'kg', 'ml', 'g'));

-- Insert vegetables and fruits (1 kg base unit, increment by 0.5 kg using decimal)
INSERT INTO products (name, category, description, price_kzt, stock_quantity, image_urls, is_active, unit_type)
VALUES
  (
    'Яблоки красные',
    'vegetables',
    'Свежие красные яблоки, сладкие и сочные. Цена за 1 кг.',
    450,
    100,
    ARRAY['https://images.unsplash.com/photo-1560806887-1195a3e9aa42?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  (
    'Бананы',
    'vegetables',
    'Спелые бананы, идеальные для завтрака. Цена за 1 кг.',
    380,
    80,
    ARRAY['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  (
    'Помидоры',
    'vegetables',
    'Свежие помидоры для салатов и блюд. Цена за 1 кг.',
    520,
    60,
    ARRAY['https://images.unsplash.com/photo-1592924357615-a04a2cfef4ad?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  (
    'Огурцы',
    'vegetables',
    'Свежие огурцы, хрустящие и вкусные. Цена за 1 кг.',
    350,
    75,
    ARRAY['https://images.unsplash.com/photo-1590969033100-9f60a05a9d82?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  (
    'Морковь',
    'vegetables',
    'Сладкая морковь, богатая витаминами. Цена за 1 кг.',
    280,
    90,
    ARRAY['https://images.unsplash.com/photo-1584270354949-56ffb42ec811?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  (
    'Лук репчатый',
    'vegetables',
    'Качественный репчатый лук для кулинарии. Цена за 1 кг.',
    200,
    100,
    ARRAY['https://images.unsplash.com/photo-1599599810694-b308981af3ab?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'kg'
  ),
  -- Chemistry products (cleaning supplies)
  (
    'Средство для мытья посуды',
    'chemistry',
    'Эффективное средство для мытья посуды. Объем 500 мл.',
    850,
    50,
    ARRAY['https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  (
    'Универсальный очиститель',
    'chemistry',
    'Универсальное чистящее средство для всех поверхностей. 1 литр.',
    1200,
    40,
    ARRAY['https://images.unsplash.com/photo-1577720643272-265a72642fd8?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  (
    'Стиральный порошок',
    'chemistry',
    'Качественный стиральный порошок для всех типов тканей. 2 кг.',
    2500,
    30,
    ARRAY['https://images.unsplash.com/photo-1582122820850-6af23e550eb0?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Чистящее средство для ванной',
    'chemistry',
    'Мощное чистящее средство против плесени и известковых отложений. 500 мл.',
    950,
    35,
    ARRAY['https://images.unsplash.com/photo-1611623814075-d51df30ba812?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  (
    'Средство для чистки окон',
    'chemistry',
    'Спрей для чистки стекол и окон без разводов. 500 мл.',
    680,
    45,
    ARRAY['https://images.unsplash.com/photo-1581578731548-c64695c952952?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  (
    'Дезинфекционное средство',
    'chemistry',
    'Антибактериальное средство для дезинфекции. 1 литр.',
    1100,
    50,
    ARRAY['https://images.unsplash.com/photo-1583432332921-38e3119ca585?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  -- General products
  (
    'Молоко коровье',
    'general',
    'Свежее коровье молоко высокого качества. 1 литр.',
    650,
    60,
    ARRAY['https://images.unsplash.com/photo-1550583328-6f4ee4a37eb9?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'ml'
  ),
  (
    'Печенье овсяное',
    'general',
    'Хрустящее овсяное печенье. Упаковка 300 г.',
    450,
    70,
    ARRAY['https://images.unsplash.com/photo-1599599810694-b308981af3ab?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Хлеб пшеничный',
    'general',
    'Свежий пшеничный хлеб. 500 г.',
    350,
    50,
    ARRAY['https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Творог',
    'general',
    'Нежный творог для завтрака. Упаковка 250 г.',
    580,
    40,
    ARRAY['https://images.unsplash.com/photo-1584622523160-19ccdfb8c3f3?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Сметана',
    'general',
    'Густая сметана для десертов и блюд. 200 г.',
    420,
    45,
    ARRAY['https://images.unsplash.com/photo-1557003917291-7a4c07c78235?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Масло сливочное',
    'general',
    'Натуральное сливочное масло. 200 г.',
    950,
    50,
    ARRAY['https://images.unsplash.com/photo-1615485307378-df10d3bed86b?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Мёд натуральный',
    'general',
    'Экологичный натуральный мед. 500 г.',
    1500,
    35,
    ARRAY['https://images.unsplash.com/photo-1585747860715-cd4628902d4a?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  ),
  (
    'Каша овсяная',
    'general',
    'Быстрорастворимая овсяная каша. 500 г.',
    380,
    55,
    ARRAY['https://images.unsplash.com/photo-1590000755056-a8d53b5e6f90?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE,
    'g'
  )
ON CONFLICT (name) DO NOTHING;
