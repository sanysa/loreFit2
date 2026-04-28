UPDATE products
SET image_urls = ARRAY[
  CASE name
    WHEN 'Помидоры свежие' THEN 'https://images.unsplash.com/photo-1592924357228-85a36e2a32ca?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Огурцы хрустящие' THEN 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Морковь сладкая' THEN 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Картофель белый' THEN 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Капуста свежая' THEN 'https://images.unsplash.com/photo-1553530666-ba953a5ad488?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Лук репчатый' THEN 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Чеснок свежий' THEN 'https://images.unsplash.com/photo-1608500218808-84753bdce5c7?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Перец болгарский' THEN 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Стиральный порошок 1 кг' THEN 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Жидкое мыло для посуды 500 мл' THEN 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Очиститель стекол 750 мл' THEN 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Универсальный чистящий спрей 1 л' THEN 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Туалетная бумага 12 рулонов' THEN 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Средство для мытья полов 1 л' THEN 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Отбеливатель хлорный 1 л' THEN 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Средство для чистки ванны 750 мл' THEN 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Спрей от насекомых 400 мл' THEN 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Яблоки красные' THEN '/product-images/apples-red.svg'
    WHEN 'Бананы' THEN 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Помидоры' THEN '/product-images/tomatoes.svg'
    WHEN 'Огурцы' THEN '/product-images/cucumbers.svg'
    WHEN 'Морковь' THEN '/product-images/carrots.svg'
    WHEN 'Средство для мытья посуды' THEN 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Универсальный очиститель' THEN 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Стиральный порошок' THEN 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Чистящее средство для ванной' THEN 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Средство для чистки окон' THEN 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Дезинфекционное средство' THEN '/product-images/disinfectant.svg'
    WHEN 'Молоко коровье' THEN 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Печенье овсяное' THEN 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Хлеб пшеничный' THEN 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Творог' THEN 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Сметана' THEN 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Масло сливочное' THEN '/product-images/butter.svg'
    WHEN 'Мёд натуральный' THEN 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=80'
    WHEN 'Каша овсяная' THEN 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1200&q=80'
    ELSE image_urls[1]
  END
]::TEXT[]
WHERE name IN (
  'Помидоры свежие',
  'Огурцы хрустящие',
  'Морковь сладкая',
  'Картофель белый',
  'Капуста свежая',
  'Лук репчатый',
  'Чеснок свежий',
  'Перец болгарский',
  'Стиральный порошок 1 кг',
  'Жидкое мыло для посуды 500 мл',
  'Очиститель стекол 750 мл',
  'Универсальный чистящий спрей 1 л',
  'Туалетная бумага 12 рулонов',
  'Средство для мытья полов 1 л',
  'Отбеливатель хлорный 1 л',
  'Средство для чистки ванны 750 мл',
  'Спрей от насекомых 400 мл',
  'Яблоки красные',
  'Бананы',
  'Помидоры',
  'Огурцы',
  'Морковь',
  'Средство для мытья посуды',
  'Универсальный очиститель',
  'Стиральный порошок',
  'Чистящее средство для ванной',
  'Средство для чистки окон',
  'Дезинфекционное средство',
  'Молоко коровье',
  'Печенье овсяное',
  'Хлеб пшеничный',
  'Творог',
  'Сметана',
  'Масло сливочное',
  'Мёд натуральный',
  'Каша овсяная'
);
