-- Add initial products for vegetables and chemistry categories

INSERT INTO products (name, category, description, price_kzt, stock_quantity, image_urls, is_active)
VALUES
  -- Овощи
  (
    'Помидоры свежие',
    'equipment',
    'Сочные спелые помидоры прямо с грядки. Отличное качество, свежесть гарантирована.',
    850,
    50,
    ARRAY['https://images.unsplash.com/photo-1592924357228-85a36e2a32ca?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Огурцы хрустящие',
    'equipment',
    'Молодые хрустящие огурцы. Идеальны для салатов и свежих закусок.',
    620,
    45,
    ARRAY['https://images.unsplash.com/photo-1569163139394-de4798aa62b3?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Морковь сладкая',
    'equipment',
    'Сладкая оранжевая морковь. Богата бета-каротином и полезна для здоровья.',
    450,
    60,
    ARRAY['https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Картофель белый',
    'equipment',
    'Качественный белый картофель для любых блюд. Без химических обработок.',
    380,
    100,
    ARRAY['https://images.unsplash.com/photo-1596424894768-b8d1f08858ec?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Капуста свежая',
    'equipment',
    'Кочаны плотной свежей капусты. Отлично хранится, универсальна в использовании.',
    520,
    40,
    ARRAY['https://images.unsplash.com/photo-1553530666-ba953a5ad488?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Лук репчатый',
    'equipment',
    'Крепкий лук с хорошей лежкостью. Основа для многих блюд.',
    280,
    80,
    ARRAY['https://images.unsplash.com/photo-1587049352798-f752b4c6e2d6?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Чеснок свежий',
    'equipment',
    'Острый свежий чеснок. Идеален для любителей острого вкуса и здоровья.',
    950,
    35,
    ARRAY['https://images.unsplash.com/photo-1596040694312-923e10a34390?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Перец болгарский',
    'equipment',
    'Сладкие разноцветные перцы (красные, жёлтые, зелёные). Витаминная бомба!',
    1200,
    30,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),

  -- Бытовая химия
  (
    'Стиральный порошок 1 кг',
    'nutrition',
    'Эффективный стиральный порошок для белого и цветного белья. Мощное отбеливание.',
    1500,
    70,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Жидкое мыло для посуды 500 мл',
    'nutrition',
    'Концентрированное жидкое мыло. Отлично справляется с жиром и грязью.',
    680,
    60,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Очиститель стекол 750 мл',
    'nutrition',
    'Спрей для чистки стекол и зеркал. Быстрое и безразводное высыхание.',
    420,
    50,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Универсальный чистящий спрей 1 л',
    'nutrition',
    'Средство для очистки всех поверхностей в доме. Полностью безопасно для семьи.',
    890,
    55,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Туалетная бумага 12 рулонов',
    'nutrition',
    'Мягкая и прочная туалетная бумага. 3-слойная, долговечная.',
    1200,
    100,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Средство для мытья полов 1 л',
    'nutrition',
    'Концентрированное средство для идеально чистых полов. Не оставляет разводов.',
    650,
    45,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Отбеливатель хлорный 1 л',
    'nutrition',
    'Эффективный отбеливатель и дезинфектант. Идеален для дезинфекции.',
    520,
    40,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Средство для чистки ванны 750 мл',
    'nutrition',
    'Специальное средство для ванны и раковины. Удаляет известь и ржавчину.',
    780,
    35,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  ),
  (
    'Спрей от насекомых 400 мл',
    'nutrition',
    'Эффективный инсектицид от мух, комаров и других насекомых.',
    450,
    30,
    ARRAY['https://images.unsplash.com/photo-1599599810694-d3291f1cb0bb?auto=format&fit=crop&w=1200&q=80']::TEXT[],
    TRUE
  )
ON CONFLICT (name) DO NOTHING;
