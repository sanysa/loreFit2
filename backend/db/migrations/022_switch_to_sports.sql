-- Remove all old food products first (before adding constraint)
DELETE FROM order_items WHERE order_id IN (SELECT id FROM orders);
DELETE FROM orders;
DELETE FROM products;

-- Drop old constraint and add sports categories
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_category_check;
ALTER TABLE products ADD CONSTRAINT products_category_check
  CHECK (category = ANY (ARRAY[
    'cardio','strength','yoga','boxing','running',
    'cycling','swimming','team_sports','outdoor',
    'clothing','footwear','nutrition','accessories',
    'protection','general'
  ]));

-- Seed sports products
INSERT INTO products (name, category, description, price_kzt, stock_quantity, unit_type, image_urls, is_active, discount_price_kzt, use_discount, barcode, base_price_kzt) VALUES
-- Cardio
('Беговая дорожка ProFit T500', 'cardio', 'Электрическая беговая дорожка, скорость до 16 км/ч, наклон 12 уровней', 285000, 8, 'piece', ARRAY['https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80'], true, 255000, true, '', 285000),
('Велотренажёр магнитный SportElite B900', 'cardio', 'Магнитный велотренажёр с 8 уровнями нагрузки и LCD-дисплеем', 92000, 12, 'piece', ARRAY['https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80'], true, 0, false, '', 92000),
('Эллиптический тренажёр Oxygen EX', 'cardio', 'Плавный ход, 16 программ тренировок, пульсодатчики', 135000, 6, 'piece', ARRAY['https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80'], true, 0, false, '', 135000),
('Скакалка скоростная RDX', 'cardio', 'Алюминиевые ручки, трос 3 мм, счётчик прыжков', 2800, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80'], true, 0, false, '', 2800),
('Гребной тренажёр AirRower Pro', 'cardio', 'Воздушный гребной тренажёр, регулируемое сопротивление', 178000, 5, 'piece', ARRAY['https://images.unsplash.com/photo-1617195737496-bc30194e3a19?w=800&q=80'], true, 155000, true, '', 178000),

-- Strength
('Штанга олимпийская 20 кг', 'strength', 'Гриф стальной 220 см + диски в комплекте', 48000, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'], true, 0, false, '', 48000),
('Гантели разборные 2×20 кг', 'strength', 'Чугунные диски, хромированный гриф', 22000, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80'], true, 19000, true, '', 22000),
('Гиря чугунная 16 кг', 'strength', 'Классическая чугунная гиря с ровным основанием', 8500, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80'], true, 0, false, '', 8500),
('Турник настенный складной', 'strength', 'Выдерживает до 150 кг, монтаж без сверления', 5800, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80'], true, 0, false, '', 5800),
('Резиновые петли (набор 5 шт)', 'strength', 'Нагрузка 5–50 кг, латекс премиум-класса', 3500, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80'], true, 2800, true, '', 3500),
('Силовая рама со скамьёй', 'strength', 'Многофункциональная силовая рама для домашнего тренажёрного зала', 125000, 4, 'piece', ARRAY['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'], true, 0, false, '', 125000),

-- Yoga
('Коврик для йоги 6 мм TPE', 'yoga', 'Нескользящее покрытие с обеих сторон, размер 183×61 см', 3500, 35, 'piece', ARRAY['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'], true, 2800, true, '', 3500),
('Блоки для йоги (комплект 2 шт)', 'yoga', 'Пробковые блоки для поддержки и баланса', 2200, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80'], true, 0, false, '', 2200),
('Ремень для йоги 244 см', 'yoga', 'Хлопок, металлическая пряжка D-ring', 900, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'], true, 0, false, '', 900),
('Фитнес-резинки (набор 5 шт)', 'yoga', 'Тканевые резинки разного сопротивления для ягодиц и ног', 1800, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80'], true, 0, false, '', 1800),
('Колесо для пресса с ковриком', 'yoga', 'Двойное колесо с нескользящими ручками', 2500, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'], true, 0, false, '', 2500),

-- Boxing
('Боксёрские перчатки Everlast 12 oz', 'boxing', 'Натуральная кожа, гелевая набивка, липучка', 14500, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80'], true, 0, false, '', 14500),
('Боксёрский мешок 50 кг', 'boxing', 'Кожзам, наполнитель — песок + ткань, высота 120 см', 28000, 10, 'piece', ARRAY['https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80'], true, 24000, true, '', 28000),
('Бинты боксёрские 3 м (пара)', 'boxing', 'Хлопок с эластаном, большой большой палец', 1500, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'], true, 0, false, '', 1500),
('Скакалка боксёрская', 'boxing', 'ПВХ-трос 3 мм, алюминиевые ручки с подшипниками', 2200, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80'], true, 0, false, '', 2200),
('Лапы боксёрские (пара)', 'boxing', 'Изогнутые, кожзам, усиленная набивка', 5500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80'], true, 0, false, '', 5500),

-- Running
('Беговые кроссовки Nike Air Zoom', 'running', 'Амортизация Air, дышащий верх, подошва Zoom', 48000, 18, 'piece', ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], true, 42000, true, '', 48000),
('Компрессионные носки для бега', 'running', 'Улучшают кровообращение, 3 пары', 2800, 50, 'piece', ARRAY['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'], true, 0, false, '', 2800),
('Пульсометр нагрудный Polar', 'running', 'Bluetooth + ANT+, точность ±1 уд/мин', 9500, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80'], true, 0, false, '', 9500),
('Налобный фонарь для бега', 'running', '200 лм, аккумулятор, IPX4, вес 58 г', 4200, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80'], true, 0, false, '', 4200),
('Спортивные часы Garmin Forerunner', 'running', 'GPS, пульс, мониторинг сна, 7 дней батарея', 85000, 8, 'piece', ARRAY['https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=80'], true, 78000, true, '', 85000),

-- Cycling
('Велошлем Bell Tempo', 'cycling', '22 вентиляционных отверстия, регулировка Ergo Fit', 22000, 14, 'piece', ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'], true, 0, false, '', 22000),
('Велоперчатки без пальцев', 'cycling', 'Гель-набивка, антискользящие ладони', 3800, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80'], true, 0, false, '', 3800),
('Велозамок U-образный', 'cycling', 'Закалённая сталь 13 мм, 2 ключа', 3200, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'], true, 0, false, '', 3200),
('Насос велосипедный напольный', 'cycling', 'Манометр, клапаны Presta и Schrader', 4500, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80'], true, 0, false, '', 4500),
('Фляга велосипедная 750 мл', 'cycling', 'BPA-free пластик, держатель в комплекте', 1800, 45, 'piece', ARRAY['https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80'], true, 0, false, '', 1800),

-- Swimming
('Очки для плавания Speedo Futura', 'swimming', 'Антифог, UV-защита, ремешок легко регулируется', 4500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80'], true, 3800, true, '', 4500),
('Шапочка для плавания силиконовая', 'swimming', 'Не тянет волосы, размер универсальный', 1200, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80'], true, 0, false, '', 1200),
('Доска для плавания тренировочная', 'swimming', 'Пенополиэтилен высокой плотности, 45×30×3.8 см', 2800, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80'], true, 0, false, '', 2800),
('Ласты для тренировки (короткие)', 'swimming', 'Открытая пятка, силикон, разм. 36–46', 5500, 18, 'piece', ARRAY['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80'], true, 0, false, '', 5500),

-- Team sports
('Футбольный мяч Adidas Tiro 5', 'team_sports', 'Размер 5, машинная сшивка, бутил-камера', 8500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80'], true, 0, false, '', 8500),
('Баскетбольный мяч Spalding NBL', 'team_sports', 'Размер 7, натуральная резина, для зала и улицы', 9500, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80'], true, 0, false, '', 9500),
('Волейбольный мяч Mikasa', 'team_sports', 'Размер 5, 18 панелей, официальный размер и вес', 7500, 22, 'piece', ARRAY['https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80'], true, 0, false, '', 7500),
('Теннисные ракетки (набор 2+3 мяча)', 'team_sports', 'Алюминиевый корпус, натяжка 24 lbs', 6800, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1574279606130-09958dc756f7?w=800&q=80'], true, 0, false, '', 6800),

-- Outdoor
('Туристический рюкзак 60 л', 'outdoor', 'Рама из алюминия, система вентиляции спины, дождевик', 28000, 12, 'piece', ARRAY['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'], true, 0, false, '', 28000),
('Треккинговые палки (пара)', 'outdoor', 'Алюминий 7075, антишоковая система, пробковые ручки', 9500, 18, 'piece', ARRAY['https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80'], true, 0, false, '', 9500),
('Туристический коврик самонадувной', 'outdoor', 'Толщина 3.8 см, размер 183×51, вес 680 г', 8500, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80'], true, 7200, true, '', 8500),
('Спортивный нож multi-tool', 'outdoor', '14 функций, нержавеющая сталь, чехол в комплекте', 5500, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80'], true, 0, false, '', 5500),

-- Clothing
('Компрессионные шорты Under Armour', 'clothing', 'HeatGear ткань, защита от УФ, плоские швы', 8500, 22, 'piece', ARRAY['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'], true, 0, false, '', 8500),
('Спортивный топ женский Nike', 'clothing', 'Dri-FIT, высокая поддержка, съёмные вкладыши', 7200, 28, 'piece', ARRAY['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'], true, 5800, true, '', 7200),
('Тренировочная футболка мужская', 'clothing', 'Быстросохнущая ткань, сетчатые вставки', 4500, 35, 'piece', ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'], true, 0, false, '', 4500),
('Спортивные штаны Adidas', 'clothing', 'Зауженный крой, карманы на молнии, хлопок-стрейч', 9500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'], true, 0, false, '', 9500),
('Ветровка спортивная', 'clothing', 'Водоотталкивающее покрытие, капюшон, вес 220 г', 12000, 18, 'piece', ARRAY['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80'], true, 9800, true, '', 12000),

-- Footwear
('Кроссовки для зала Reebok Nano', 'footwear', 'Плоская подошва, широкий носок, боковая стабильность', 42000, 14, 'piece', ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], true, 0, false, '', 42000),
('Кеды для баскетбола Nike Air', 'footwear', 'Высокий борт, амортизация Air, нескользящая подошва', 55000, 10, 'piece', ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], true, 48000, true, '', 55000),
('Кроссовки для тенниса Wilson', 'footwear', 'Боковая защита, DuraWear резина, дышащий верх', 35000, 12, 'piece', ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], true, 0, false, '', 35000),

-- Nutrition
('Протеин Whey Gold 1 кг (шоколад)', 'nutrition', '24 г белка на порцию, 30 порций, без сахара', 18500, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 16000, true, '', 18500),
('BCAA аминокислоты 300 г', 'nutrition', 'Соотношение 2:1:1, вкус арбуз, 60 порций', 9500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 0, false, '', 9500),
('Креатин моногидрат 300 г', 'nutrition', 'Micronized, без вкуса, 60 порций', 7500, 28, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 0, false, '', 7500),
('Протеиновые батончики (12 шт)', 'nutrition', '20 г белка, 200 ккал, вкус шоколад-карамель', 6800, 40, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 5500, true, '', 6800),
('Изотоник порошок 500 г', 'nutrition', 'Электролиты + витамин C, 50 порций, вкус лимон', 4200, 35, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 0, false, '', 4200),
('Предтренировочный комплекс 300 г', 'nutrition', 'Кофеин + бета-аланин + цитруллин, 30 порций', 8500, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'], true, 0, false, '', 8500),

-- Accessories
('Бутылка для воды 750 мл', 'accessories', 'BPA-free Tritan, крышка с петлёй, шкала объёма', 2500, 60, 'piece', ARRAY['https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80'], true, 0, false, '', 2500),
('Спортивная сумка Adidas 40 л', 'accessories', 'Отдел для обуви, влажный карман, регулируемый ремень', 8500, 22, 'piece', ARRAY['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'], true, 7000, true, '', 8500),
('Перчатки для фитнеса', 'accessories', 'Открытые пальцы, гелевые вставки, велюровая спинка', 3200, 35, 'piece', ARRAY['https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80'], true, 0, false, '', 3200),
('Фитнес-браслет Xiaomi Band 8', 'accessories', 'AMOLED-экран, 16 дней, 150 режимов спорта, SpO2', 18000, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80'], true, 15000, true, '', 18000),
('Роликовый массажёр для мышц', 'accessories', 'Foam roller 33 см, EVA+ABS, нагрузка до 150 кг', 4500, 30, 'piece', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'], true, 0, false, '', 4500),
('Спортивный рюкзак 30 л', 'accessories', 'Отдел для ноутбука 15.6", USB-порт, дождевик', 9500, 18, 'piece', ARRAY['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'], true, 0, false, '', 9500),

-- Protection
('Налокотники + наколенники (набор)', 'protection', 'EVA-пена + неопрен, размер S-XL', 4800, 20, 'piece', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'], true, 0, false, '', 4800),
('Защитный шлем для роллеров', 'protection', 'ABS снаружи, EPS внутри, 11 вент. отверстий', 8500, 15, 'piece', ARRAY['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'], true, 0, false, '', 8500),
('Суппорт колена', 'protection', 'Неопрен 5 мм, силиконовое кольцо пателлы, пара', 5500, 25, 'piece', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'], true, 0, false, '', 5500),
('Пояс атлетический кожаный', 'protection', 'Ширина 10 см, толщина 10 мм, пряжка-рычаг', 12000, 14, 'piece', ARRAY['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'], true, 9500, true, '', 12000);
