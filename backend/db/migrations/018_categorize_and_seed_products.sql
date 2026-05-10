-- Recategorize existing products
UPDATE products SET category = 'home'       WHERE id = 19;  -- Туалетная бумага
UPDATE products SET category = 'dairy'      WHERE id IN (36, 39, 40, 41); -- Молоко, Творог, Сметана, Масло сливочное
UPDATE products SET category = 'sweets'     WHERE id = 37;  -- Печенье овсяное
UPDATE products SET category = 'bread'      WHERE id = 38;  -- Хлеб пшеничный
UPDATE products SET category = 'baking'     WHERE id = 42;  -- Мёд натуральный
UPDATE products SET category = 'pasta'      WHERE id = 43;  -- Каша овсяная

-- MEAT
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Куриное филе (грудка)', 'meat', 'Свежее куриное филе высшего сорта. Нежное мясо без кожи и костей. Цена за 1 кг.', 1050, 80, 'kg', ARRAY['https://images.unsplash.com/photo-1604503468506-a8da13d11d36?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1050),
('Говядина (шея)', 'meat', 'Свежая говядина, мягкое мясо шеи. Идеально для тушения и запекания. Цена за 1 кг.', 2800, 40, 'kg', ARRAY['https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 2800),
('Свинина (рёбрышки)', 'meat', 'Сочные свиные рёбрышки для гриля и барбекю. Цена за 1 кг.', 1900, 35, 'kg', ARRAY['https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1900),
('Куриные бёдра', 'meat', 'Сочные куриные бёдра на кости. Подходят для жарки, тушения и запекания. Цена за 1 кг.', 780, 90, 'kg', ARRAY['https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 780);

-- SAUSAGE
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Колбаса «Докторская» варёная', 'sausage', 'Классическая варёная колбаса из свинины и говядины. Цена за 1 кг.', 1400, 50, 'kg', ARRAY['https://images.unsplash.com/photo-1621495696806-2e7b32e7c8b1?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1400),
('Сосиски молочные (5 шт)', 'sausage', 'Нежные молочные сосиски из натурального мяса. Упаковка 5 штук.', 680, 70, 'piece', ARRAY['https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 680),
('Колбаса «Краковская» копчёная', 'sausage', 'Ароматная копчёная колбаса с чесноком и перцем. Цена за 1 кг.', 1800, 30, 'kg', ARRAY['https://images.unsplash.com/photo-1567626007745-a41f4e11f6cf?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1800);

-- FISH
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Лосось (стейк)', 'fish', 'Свежий стейк норвежского лосося. Богат омега-3 кислотами. Цена за 1 кг.', 3200, 25, 'kg', ARRAY['https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 3200),
('Минтай (тушка)', 'fish', 'Свежемороженый минтай — нежирная морская рыба. Цена за 1 кг.', 780, 45, 'kg', ARRAY['https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 780),
('Скумбрия горячего копчения', 'fish', 'Ароматная скумбрия горячего копчения. 1 штука ~350 г.', 950, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 950);

-- PASTA (крупы и макароны)
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Спагетти (500 г)', 'pasta', 'Итальянские спагетти из твёрдых сортов пшеницы. Время варки 9–11 минут.', 320, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 320),
('Рис длиннозернистый (1 кг)', 'pasta', 'Рассыпчатый длиннозернистый рис. Идеален для плова и гарниров.', 480, 90, 'piece', ARRAY['https://images.unsplash.com/photo-1536304993881-ff86e0c9c48a?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 480),
('Гречневая крупа (1 кг)', 'pasta', 'Отборная гречневая крупа ядрица. Богата железом и витаминами.', 400, 85, 'piece', ARRAY['https://images.unsplash.com/photo-1542444592-8a39e5c2d5f7?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 400);

-- SWEETS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Шоколад молочный (100 г)', 'sweets', 'Нежный молочный шоколад с кремовым вкусом. Классическая плитка 100 г.', 280, 120, 'piece', ARRAY['https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280),
('Конфеты ассорти (500 г)', 'sweets', 'Ассортимент шоколадных конфет в коробке. 500 г.', 1200, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1200),
('Мармелад фруктовый (200 г)', 'sweets', 'Мягкий фруктовый мармелад с натуральными ароматизаторами. 200 г.', 350, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 350);

-- FROZEN
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Пельмени «Сибирские» (0.5 кг)', 'frozen', 'Классические пельмени из свинины и говядины ручной лепки. 500 г.', 950, 55, 'piece', ARRAY['https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 950),
('Блинчики с мясом замороженные', 'frozen', 'Тонкие блинчики с мясной начинкой. Упаковка 500 г, 10 штук.', 780, 45, 'piece', ARRAY['https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 780),
('Пицца замороженная «Маргарита»', 'frozen', 'Готовая замороженная пицца с томатным соусом и сыром. 350 г.', 1200, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1200);

-- SPICES
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Соль поваренная (1 кг)', 'spices', 'Мелкая поваренная соль высшего сорта. 1 кг.', 120, 200, 'piece', ARRAY['https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 120),
('Перец чёрный молотый (50 г)', 'spices', 'Ароматный чёрный перец мелкого помола. 50 г.', 280, 150, 'piece', ARRAY['https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280),
('Смесь специй для мяса (50 г)', 'spices', 'Готовая смесь специй и трав для мясных блюд. 50 г.', 350, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 350);

-- TEA & COFFEE
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Чай чёрный «Тесс» (25 пакетиков)', 'tea_coffee', 'Крепкий листовой чай в пакетиках. 25 пакетиков.', 650, 80, 'piece', ARRAY['https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 650),
('Кофе растворимый «Nescafé» (100 г)', 'tea_coffee', 'Растворимый кофе с насыщенным ароматом. 100 г.', 1800, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1800),
('Зелёный чай «Грин Филд» (25 пак.)', 'tea_coffee', 'Нежный зелёный чай в пакетиках. Богат антиоксидантами. 25 пакетиков.', 580, 70, 'piece', ARRAY['https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 580);

-- READY FOOD
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Лапша «Доширак» (90 г)', 'ready_food', 'Лапша быстрого приготовления со вкусом курицы. 90 г.', 180, 200, 'piece', ARRAY['https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 180),
('Суп-пюре «Кнорр» (1 порция)', 'ready_food', 'Быстрый суп-пюре. Просто залейте кипятком и подождите 3 минуты.', 320, 120, 'piece', ARRAY['https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 320),
('Каша «Увелка» быстрого приготовления', 'ready_food', 'Овсяная каша быстрого приготовления с различными вкусами. 40 г.', 280, 150, 'piece', ARRAY['https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280);

-- KIDS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Пюре «Агуша» яблоко (100 г)', 'kids', 'Фруктовое пюре для детей от 4 месяцев. Без сахара и консервантов. 100 г.', 280, 80, 'piece', ARRAY['https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280),
('Каша «Heinz» молочная (200 г)', 'kids', 'Детская молочная каша с пребиотиками. Для детей от 6 месяцев. 200 г.', 950, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 950),
('Сок детский «Сады Придонья» (200 мл)', 'kids', 'Натуральный сок для детей без сахара и консервантов. 200 мл.', 250, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 250);

-- HOME
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Бумажные полотенца (2 рулона)', 'home', 'Прочные двухслойные бумажные полотенца. 2 рулона по 100 листов.', 480, 70, 'piece', ARRAY['https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 480),
('Губки для посуды (5 шт)', 'home', 'Двусторонние губки для мытья посуды. Жёсткий абразивный слой. 5 штук.', 220, 150, 'piece', ARRAY['https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 220),
('Мусорные пакеты 60 л (30 шт)', 'home', 'Прочные мусорные пакеты с завязками. 60 литров. 30 штук в рулоне.', 350, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 350);

-- PETS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Корм для кошек «Вискас» (400 г)', 'pets', 'Сухой корм для взрослых кошек с курицей. 400 г.', 580, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 580),
('Корм для собак «Chappi» (500 г)', 'pets', 'Сухой корм для взрослых собак с говядиной и овощами. 500 г.', 650, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 650),
('Наполнитель для кошачьего туалета (5 л)', 'pets', 'Комкующийся наполнитель с нейтрализатором запаха. 5 литров.', 850, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 850);

-- DRINKS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Вода «Сарыагаш» газированная (1.5 л)', 'drinks', 'Природная минеральная вода с газом. 1.5 литра.', 180, 200, 'piece', ARRAY['https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 180),
('Сок апельсиновый «Rich» (1 л)', 'drinks', 'Натуральный апельсиновый сок прямого отжима. 1 литр.', 480, 80, 'piece', ARRAY['https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 480),
('Кола (2 л)', 'drinks', 'Газированный напиток кола. 2 литра.', 320, 120, 'piece', ARRAY['https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 320);

-- BAKING
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Мука пшеничная высший сорт (1 кг)', 'baking', 'Мука высшего сорта для выпечки хлеба, пирогов и блинов. 1 кг.', 280, 120, 'piece', ARRAY['https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280),
('Сахар-песок (1 кг)', 'baking', 'Белый сахар-песок первого сорта. 1 кг.', 350, 150, 'piece', ARRAY['https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 350),
('Разрыхлитель для теста (10 г)', 'baking', 'Разрыхлитель для пышной и мягкой выпечки. 10 г.', 150, 200, 'piece', ARRAY['https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 150);

-- OILS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Масло подсолнечное рафинированное (1 л)', 'oils', 'Рафинированное дезодорированное подсолнечное масло. 1 литр.', 780, 90, 'piece', ARRAY['https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 780),
('Оливковое масло «Borges» (500 мл)', 'oils', 'Натуральное оливковое масло первого холодного отжима Extra Virgin. 500 мл.', 2100, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 2100);

-- CANNED
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Горошек зелёный «Bonduelle» (400 г)', 'canned', 'Нежный зелёный горошек в собственном соку. 400 г.', 320, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 320),
('Кукуруза сладкая «Globus» (340 г)', 'canned', 'Сладкая кукуруза консервированная. 340 г.', 280, 110, 'piece', ARRAY['https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 280),
('Томаты резаные в с/с (400 г)', 'canned', 'Спелые помидоры, резаные кусочками в собственном соку. 400 г.', 350, 90, 'piece', ARRAY['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 350);

-- SNACKS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Чипсы «Lay''s» классические (150 г)', 'snacks', 'Хрустящие картофельные чипсы с солью. 150 г.', 420, 100, 'piece', ARRAY['https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 420),
('Орехи кешью жареные (100 г)', 'snacks', 'Жареные кешью без добавок. Источник белка и полезных жиров. 100 г.', 950, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 950),
('Сухарики «Три корочки» (100 г)', 'snacks', 'Хрустящие ржаные сухарики со вкусом бекона. 100 г.', 180, 150, 'piece', ARRAY['https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 180);

-- COSMETICS
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
('Шампунь «Head & Shoulders» (400 мл)', 'cosmetics', 'Шампунь против перхоти с питательным комплексом. 400 мл.', 1200, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 1200),
('Гель для душа «Dove» (250 мл)', 'cosmetics', 'Увлажняющий гель для душа с питательным кремом. 250 мл.', 680, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1571782742578-0d647b910d27?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 680),
('Зубная паста «Colgate» (100 мл)', 'cosmetics', 'Отбеливающая зубная паста с фторидом. 100 мл.', 580, 80, 'piece', ARRAY['https://images.unsplash.com/photo-1559591937-abc6d2e9ccfb?auto=format&fit=crop&w=1200&q=80'], true, 0, false, '', 580);
