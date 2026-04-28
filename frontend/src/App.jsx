import { useEffect, useState } from 'react'
import './App.css'

const hiddenProductNames = [
  'Смарт-бутылка 750 мл',
  'Протеин Whey Core 900 г',
  'BCAA Amino Complex',
]
const legacyVegetableNames = new Set([
  'Помидоры свежие',
  'Огурцы хрустящие',
  'Морковь сладкая',
  'Картофель белый',
  'Капуста свежая',
  'Лук репчатый',
  'Чеснок свежий',
  'Перец болгарский',
])

const productImageByName = {
  'Помидоры свежие': 'https://images.unsplash.com/photo-1592924357228-85a36e2a32ca?auto=format&fit=crop&w=1200&q=80',
  'Огурцы хрустящие': 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?auto=format&fit=crop&w=1200&q=80',
  'Морковь сладкая': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
  'Картофель белый': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
  'Капуста свежая': 'https://images.unsplash.com/photo-1553530666-ba953a5ad488?auto=format&fit=crop&w=1200&q=80',
  'Лук репчатый': 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=1200&q=80',
  'Чеснок свежий': 'https://images.unsplash.com/photo-1608500218808-84753bdce5c7?auto=format&fit=crop&w=1200&q=80',
  'Перец болгарский': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80',
  'Стиральный порошок 1 кг': 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
  'Жидкое мыло для посуды 500 мл': 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80',
  'Очиститель стекол 750 мл': 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
  'Универсальный чистящий спрей 1 л': 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80',
  'Туалетная бумага 12 рулонов': 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80',
  'Средство для мытья полов 1 л': 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80',
  'Отбеливатель хлорный 1 л': 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80',
  'Средство для чистки ванны 750 мл': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  'Спрей от насекомых 400 мл': 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=1200&q=80',
  'Яблоки красные': '/product-images/apples-red.svg',
  Бананы: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80',
  Помидоры: '/product-images/tomatoes.svg',
  Огурцы: '/product-images/cucumbers.svg',
  Морковь: '/product-images/carrots.svg',
  'Средство для мытья посуды': 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80',
  'Универсальный очиститель': 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80',
  'Стиральный порошок': 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
  'Чистящее средство для ванной': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  'Средство для чистки окон': 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
  'Дезинфекционное средство': '/product-images/disinfectant.svg',
  'Молоко коровье': 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
  'Печенье овсяное': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
  'Хлеб пшеничный': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  Творог: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80',
  Сметана: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
  'Масло сливочное': '/product-images/butter.svg',
  'Мёд натуральный': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=80',
  'Каша овсяная': 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1200&q=80',
}

const attachProductImage = (product) => {
  const fallbackImage = productImageByName[product.name]
  const unitType = getNormalizedUnitType(product)
  const imageUrls =
    fallbackImage
      ? [fallbackImage]
      : Array.isArray(product.imageUrls) && product.imageUrls.length > 0
        ? product.imageUrls
        : []

  return {
    ...product,
    unitType,
    imageUrls,
  }
}

const getNormalizedUnitType = (product) => {
  if (product.category === 'vegetables' || legacyVegetableNames.has(product.name)) {
    return 'kg'
  }

  if (product.unitType === 'ml') {
    return 'l'
  }

  return product.unitType || 'piece'
}

const getNormalizedAdminCategory = (category) => {
  if (category === 'equipment') {
    return 'vegetables'
  }

  if (category === 'nutrition') {
    return 'chemistry'
  }

  return category || 'general'
}

function App() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001'
  const paymentUrl = 'https://pay.kaspi.kz/pay/klrytula'
  const reviews = [
    {
      author: 'Александр К.',
      text: 'Отличный магазин, быстрая доставка и качественные товары. Рекомендую!',
    },
    {
      author: 'Мария П.',
      text: 'Всё просто супер! Товары пришли в отличном состоянии, цены адекватные.',
    },
    {
      author: 'Иван С.',
      text: 'Покупал несколько раз, всегда доволен качеством и обслуживанием.',
    },
    {
      author: 'Елена М.',
      text: 'Отличный выбор товаров. Доставка очень быстрая!',
    },
  ]
  const [currentPage, setCurrentPage] = useState('home')
  const [authMode, setAuthMode] = useState('login')
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState('')
  const [authSuccess, setAuthSuccess] = useState('')
  const [authUser, setAuthUser] = useState(() => {
    const raw = localStorage.getItem('lorefit_user')
    return raw ? JSON.parse(raw) : null
  })
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
  })
  const [products, setProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(false)
  const [productsError, setProductsError] = useState('')
  const [shopSearchQuery, setShopSearchQuery] = useState('')
  const [shopPriceSort, setShopPriceSort] = useState('default')
  const [selectedShopCategory, setSelectedShopCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [recentlyAddedProductId, setRecentlyAddedProductId] = useState(null)
  const [cartItems, setCartItems] = useState(() => {
    const raw = localStorage.getItem('lorefit_cart')
    return raw ? JSON.parse(raw) : []
  })
  const [fulfillmentType, setFulfillmentType] = useState('pickup')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderError, setOrderError] = useState('')
  const [lastOrder, setLastOrder] = useState(null)
  const [activeOrders, setActiveOrders] = useState([])
  const [historyOrders, setHistoryOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [ordersError, setOrdersError] = useState('')
  const [accountTab, setAccountTab] = useState('profile')
  const [accountDeleteLoading, setAccountDeleteLoading] = useState(false)
  const [accountDeleteError, setAccountDeleteError] = useState('')
  const [adminProducts, setAdminProducts] = useState([])
  const [adminOrders, setAdminOrders] = useState([])
  const [adminLoading, setAdminLoading] = useState(false)
  const [adminError, setAdminError] = useState('')
  const [adminSuccess, setAdminSuccess] = useState('')
  const [adminTab, setAdminTab] = useState('products')
  const [adminEditingProductId, setAdminEditingProductId] = useState(null)
  const [adminProductModalOpen, setAdminProductModalOpen] = useState(false)
  const [adminDeleteProductId, setAdminDeleteProductId] = useState(null)
  const [adminStatusModalOrderId, setAdminStatusModalOrderId] = useState(null)
  const [adminStatusModalValue, setAdminStatusModalValue] = useState('new')
  const [adminProductQuery, setAdminProductQuery] = useState('')
  const [adminProductCategoryFilter, setAdminProductCategoryFilter] = useState('all')
  const [adminProductAvailabilityFilter, setAdminProductAvailabilityFilter] = useState('all')
  const [adminOrderQuery, setAdminOrderQuery] = useState('')
  const [adminOrderStatusFilter, setAdminOrderStatusFilter] = useState('all')
  const [adminOrderDateFrom, setAdminOrderDateFrom] = useState('')
  const [adminOrderDateTo, setAdminOrderDateTo] = useState('')
  const [adminOrderMinSum, setAdminOrderMinSum] = useState('')
  const [adminOrderMaxSum, setAdminOrderMaxSum] = useState('')
  const [adminProductForm, setAdminProductForm] = useState({
    name: '',
    createdAt: '',
    category: 'general',
    description: '',
    priceKzt: '',
    markupPercent: '',
    stockQuantity: '',
    imageUrlsText: '',
    unitType: 'piece',
    isActive: true,
  })









  const cartTotalKzt = cartItems.reduce((sum, item) => sum + item.priceKzt * item.quantity, 0)
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const formatKzt = (amount) => `${new Intl.NumberFormat('ru-RU').format(amount)} ₸`
  const categoryLabels = {
    vegetables: 'Овощи и фрукты',
    chemistry: 'Химия и уборка',
    general: 'Общее',
  }

  const unitLabels = {
    piece: 'шт',
    kg: 'кг',
    l: 'л',
    ml: 'мл',
    g: 'г',
  }

  const statusLabels = {
    in_stock: 'В наличии',
    out_of_stock: 'Нет в наличии',
    inactive: 'Неактивен',
  }

  const getQuantityIncrement = (unitType) => {
    return unitType === 'kg' || unitType === 'l' ? 0.5 : 1
  }

  const getProductUnitType = (product) => {
    return getNormalizedUnitType(product)
  }

  const orderStatusLabels = {
    new: 'Новый',
    processing: 'В обработке',
    paid: 'Оплачен',
    shipped_or_ready: 'Отправлен / готов к выдаче',
    completed: 'Завершён',
    cancelled: 'Отменён',
  }

  const orderStatusOptions = ['new', 'processing', 'paid', 'shipped_or_ready', 'completed', 'cancelled']
  const isAdmin = authUser?.role === 'admin'
  const filteredAdminProducts = adminProducts.filter((product) => {
    const query = adminProductQuery.trim().toLowerCase()
    const byQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      String(product.id).includes(query)
    const byCategory = adminProductCategoryFilter === 'all' || product.category === adminProductCategoryFilter
    const byAvailability =
      adminProductAvailabilityFilter === 'all' ||
      (adminProductAvailabilityFilter === 'active' ? product.isActive : !product.isActive)

    return byQuery && byCategory && byAvailability
  })

  const filteredAdminOrders = adminOrders.filter((order) => {
    const query = adminOrderQuery.trim().toLowerCase()
    const byQuery =
      !query ||
      String(order.id).includes(query) ||
      (order.items || []).some((item) => item.name.toLowerCase().includes(query))

    const byStatus = adminOrderStatusFilter === 'all' || order.status === adminOrderStatusFilter

    const orderDate = new Date(order.createdAt)
    const fromDate = adminOrderDateFrom ? new Date(`${adminOrderDateFrom}T00:00:00`) : null
    const toDate = adminOrderDateTo ? new Date(`${adminOrderDateTo}T23:59:59`) : null
    const byDateFrom = !fromDate || orderDate >= fromDate
    const byDateTo = !toDate || orderDate <= toDate

    const minSum = adminOrderMinSum !== '' ? Number(adminOrderMinSum) : null
    const maxSum = adminOrderMaxSum !== '' ? Number(adminOrderMaxSum) : null
    const byMin = minSum === null || order.totalAmountKzt >= minSum
    const byMax = maxSum === null || order.totalAmountKzt <= maxSum

    return byQuery && byStatus && byDateFrom && byDateTo && byMin && byMax
  })

  const adminBasePrice = Number(adminProductForm.priceKzt) || 0
  const adminMarkupPercent = Number(adminProductForm.markupPercent) || 0
  const adminStockQuantity = Number(adminProductForm.stockQuantity) || 0
  const adminPriceWithMarkup = Math.round(adminBasePrice * (1 + adminMarkupPercent / 100))
  const adminTotalWithMarkup = adminPriceWithMarkup * adminStockQuantity
  const adminCreatedAtLabel = adminProductForm.createdAt
    ? new Date(adminProductForm.createdAt).toLocaleString('ru-RU')
    : 'Новая карточка'

  const refreshProducts = async () => {
    setProductsLoading(true)
    setProductsError('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/products`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to load products')
      }

      setProducts(
        (data.products || [])
          .filter((product) => !hiddenProductNames.includes(product.name))
          .map(attachProductImage),
      )
    } catch (error) {
      setProductsError('Не удалось загрузить товары. Попробуйте позже.')
    } finally {
      setProductsLoading(false)
    }
  }

  useEffect(() => {
    refreshProducts()
  }, [apiBaseUrl])

  useEffect(() => {
    const syncAuthUser = async () => {
      const token = localStorage.getItem('lorefit_token')

      if (!token) {
        return
      }

      try {
        const response = await fetch(`${apiBaseUrl}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch profile')
        }

        setAuthUser(data.user)
        localStorage.setItem('lorefit_user', JSON.stringify(data.user))
      } catch (error) {
        localStorage.removeItem('lorefit_token')
        localStorage.removeItem('lorefit_user')
        setAuthUser(null)
      }
    }

    syncAuthUser()
  }, [apiBaseUrl])

  useEffect(() => {
    localStorage.setItem('lorefit_cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    setCartItems((prev) => prev.filter((item) => !hiddenProductNames.includes(item.name)))
  }, [])

  useEffect(() => {
    if (!products.length) {
      return
    }

    setCartItems((prev) =>
      prev
        .map((item) => {
          const product = products.find((productItem) => productItem.id === item.productId)

          if (!product || product.availabilityStatus !== 'in_stock') {
            return null
          }

          return {
            ...item,
            quantity: Math.min(item.quantity, product.stockQuantity),
            priceKzt: product.priceKzt,
            name: product.name,
            unitType: getProductUnitType(product),
          }
        })
        .filter(Boolean),
    )
  }, [products])

  useEffect(() => {
    if (currentPage !== 'checkout' || fulfillmentType !== 'delivery') {
      return
    }

    if (deliveryAddress.trim() || !authUser) {
      return
    }

    setDeliveryAddress([authUser.country, authUser.city].filter(Boolean).join(', '))
  }, [currentPage, fulfillmentType, deliveryAddress, authUser])

  useEffect(() => {
    if (recentlyAddedProductId === null) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setRecentlyAddedProductId(null)
    }, 260)

    return () => window.clearTimeout(timeoutId)
  }, [recentlyAddedProductId])

  const addToCart = (product) => {
    if (product.availabilityStatus !== 'in_stock') {
      return
    }

    setRecentlyAddedProductId(product.id)

    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id)
      const unitType = getProductUnitType(product)
      const increment = getQuantityIncrement(unitType)

      if (existing) {
        const newQuantity = parseFloat((existing.quantity + increment).toFixed(1))
        if (newQuantity > product.stockQuantity) {
          return prev
        }

        return prev.map((item) =>
          item.productId === product.id ? { ...item, quantity: newQuantity } : item,
        )
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          priceKzt: product.priceKzt,
          quantity: increment,
          unitType,
        },
      ]
    })
  }

  const openProductDetails = async (productId) => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/products/${productId}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to load product')
      }

      if (hiddenProductNames.includes(data.product?.name)) {
        throw new Error('Product is hidden')
      }

      setSelectedProduct(attachProductImage(data.product))
      setCurrentPage('product-details')
    } catch (error) {
      setProductsError('Не удалось открыть карточку товара.')
    }
  }

  const changeCartQuantity = (productId, nextQuantity) => {
    if (nextQuantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.productId !== productId))
      return
    }

    const product = products.find((item) => item.id === productId)
    if (product && nextQuantity > product.stockQuantity) {
      return
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: parseFloat(nextQuantity.toFixed(1)) }
          : item,
      ),
    )
  }

  const getQuantityDisplay = (quantity, unitType) => {
    if (unitType === 'kg' || unitType === 'l') {
      return `${quantity} ${unitLabels[unitType]}`
    }
    return `${Math.round(quantity)} ${unitLabels[unitType]}`
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const submitOrder = async () => {
    if (cartItems.length === 0) {
      setOrderError('Корзина пуста.')
      return
    }

    if (fulfillmentType === 'delivery' && !deliveryAddress.trim()) {
      setOrderError('Введите адрес доставки.')
      return
    }

    setOrderLoading(true)
    setOrderError('')

    const token = localStorage.getItem('lorefit_token')

    try {
      const response = await fetch(`${apiBaseUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
          fulfillmentType,
          deliveryAddress: fulfillmentType === 'delivery' ? deliveryAddress : '',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Order creation failed')
      }

      setLastOrder(data.order)
      setCartItems([])
      setDeliveryAddress('')
      setCurrentPage('order-success')
    } catch (error) {
      setOrderError('Не удалось оформить заказ. Проверьте данные и попробуйте снова.')
    } finally {
      setOrderLoading(false)
    }
  }

  const loadOrdersData = async () => {
    const token = localStorage.getItem('lorefit_token')

    if (!token) {
      setOrdersError('Войдите в аккаунт, чтобы увидеть заказы.')
      setActiveOrders([])
      setHistoryOrders([])
      setHistoryPrograms([])
      return
    }

    setOrdersLoading(true)
    setOrdersError('')

    try {
      const [activeResponse, historyResponse] = await Promise.all([
        fetch(`${apiBaseUrl}/api/orders/active`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${apiBaseUrl}/api/orders/history`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ])

      const activeData = await activeResponse.json()
      const historyData = await historyResponse.json()

      if (!activeResponse.ok || !historyResponse.ok) {
        throw new Error('Failed to load orders')
      }

      setActiveOrders(activeData.orders || [])
      setHistoryOrders(historyData.orders || [])
    } catch (error) {
      setOrdersError('Не удалось загрузить заказы. Попробуйте позже.')
    } finally {
      setOrdersLoading(false)
    }
  }

  const loadAdminData = async () => {
    const token = localStorage.getItem('lorefit_token')

    if (!token) {
      setAdminError('Войдите как администратор.')
      return
    }

    setAdminLoading(true)
    setAdminError('')
    setAdminSuccess('')

    try {
      const [productsResponse, ordersResponse] = await Promise.all([
        fetch(`${apiBaseUrl}/api/admin/products`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${apiBaseUrl}/api/admin/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ])

      const productsData = await productsResponse.json()
      const ordersData = await ordersResponse.json()

      if (!productsResponse.ok || !ordersResponse.ok) {
        throw new Error('Failed to load admin data')
      }

      setAdminProducts(productsData.products || [])
      const orders = ordersData.orders || []
      setAdminOrders(orders)
    } catch (error) {
      setAdminError('Не удалось загрузить данные админ-панели.')
    } finally {
      setAdminLoading(false)
    }
  }

  const resetAdminProductForm = () => {
    setAdminEditingProductId(null)
    setAdminProductModalOpen(false)
    setAdminProductForm({
      name: '',
      createdAt: '',
      category: 'general',
      description: '',
      priceKzt: '',
      markupPercent: '',
      stockQuantity: '',
      imageUrlsText: '',
      unitType: 'piece',
      isActive: true,
    })
  }

  const updateAdminProductForm = (event) => {
    const { name, value, type, checked } = event.target
    setAdminProductForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const editAdminProduct = (product) => {
    setAdminEditingProductId(product.id)
    setAdminProductModalOpen(true)
    setAdminProductForm({
      name: product.name,
      createdAt: product.createdAt || '',
      category: getNormalizedAdminCategory(product.category),
      description: product.description,
      priceKzt: String(product.priceKzt),
      markupPercent: '',
      stockQuantity: String(product.stockQuantity),
      imageUrlsText: (product.imageUrls || []).join(', '),
      unitType: product.unitType || 'piece',
      isActive: Boolean(product.isActive),
    })
  }

  const submitAdminProduct = async (event) => {
    event.preventDefault()

    const token = localStorage.getItem('lorefit_token')
    if (!token) {
      setAdminError('Войдите как администратор.')
      return
    }

    setAdminError('')
    setAdminSuccess('')

    const payload = {
      name: adminProductForm.name.trim(),
      category: adminProductForm.category,
      description: adminProductForm.description.trim(),
      priceKzt: Number(adminProductForm.priceKzt),
      stockQuantity: Number(adminProductForm.stockQuantity),
      imageUrls: adminProductForm.imageUrlsText
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      unitType: adminProductForm.unitType,
      isActive: adminProductForm.isActive,
    }

    try {
      const endpoint = adminEditingProductId
        ? `${apiBaseUrl}/api/admin/products/${adminEditingProductId}`
        : `${apiBaseUrl}/api/admin/products`

      const response = await fetch(endpoint, {
        method: adminEditingProductId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save product')
      }

      setAdminSuccess(adminEditingProductId ? 'Товар обновлён.' : 'Товар добавлен.')
      resetAdminProductForm()
      await loadAdminData()
      await refreshProducts()
    } catch (error) {
      setAdminError('Не удалось сохранить товар.')
    }
  }

  const exportAdminProductToExcel = () => {
    const rows = [
      ['Название', adminProductForm.name || '-'],
      ['Дата заполнения', adminCreatedAtLabel],
      ['Категория', categoryLabels[adminProductForm.category] || adminProductForm.category || '-'],
      ['Описание', adminProductForm.description || '-'],
      ['Базовая цена', formatKzt(adminBasePrice)],
      ['Надбавка', `${adminMarkupPercent}%`],
      ['Цена с надбавкой', formatKzt(adminPriceWithMarkup)],
      ['Количество на складе', adminProductForm.stockQuantity || '0'],
      ['Единица измерения', unitLabels[adminProductForm.unitType] || adminProductForm.unitType || '-'],
      ['Итого всего цена', formatKzt(adminTotalWithMarkup)],
    ]

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr><td style="border:1px solid #cfdbe8;padding:8px;font-weight:600;">${label}</td><td style="border:1px solid #cfdbe8;padding:8px;">${value}</td></tr>`,
      )
      .join('')

    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head>
          <meta charset="utf-8" />
        </head>
        <body>
          <table>${tableRows}</table>
        </body>
      </html>
    `

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${(adminProductForm.name || 'product').replace(/[^\w\u0400-\u04ff-]+/g, '_')}.xls`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const deleteAdminProduct = async (productId) => {
    const token = localStorage.getItem('lorefit_token')
    if (!token) {
      setAdminError('Войдите как администратор.')
      return
    }

    setAdminError('')
    setAdminSuccess('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/products/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete product')
      }

      setAdminSuccess('Товар удалён.')
      setAdminDeleteProductId(null)
      await loadAdminData()
      await refreshProducts()
    } catch (error) {
      setAdminError('Не удалось удалить товар.')
    }
  }

  const updateAdminOrderStatus = async (orderId, nextStatus) => {
    const token = localStorage.getItem('lorefit_token')

    if (!token || !nextStatus) {
      setAdminError('Некорректные данные для обновления статуса.')
      return
    }

    setAdminError('')
    setAdminSuccess('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: nextStatus }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update order status')
      }

      setAdminSuccess('Статус заказа обновлён.')
      setAdminStatusModalOrderId(null)
      await loadAdminData()
      if (currentPage === 'account') {
        await loadOrdersData()
      }
    } catch (error) {
      setAdminError('Не удалось обновить статус заказа.')
    }
  }



  const deleteAccount = async () => {
    const token = localStorage.getItem('lorefit_token')

    if (!token) {
      setAccountDeleteError('Сессия не найдена. Войдите снова.')
      return
    }

    setAccountDeleteLoading(true)
    setAccountDeleteError('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/account`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete account')
      }

      localStorage.removeItem('lorefit_token')
      localStorage.removeItem('lorefit_user')
      localStorage.removeItem('lorefit_cart')
      setAuthUser(null)
      setCurrentPage('home')
    } catch (error) {
      setAccountDeleteError('Не удалось удалить аккаунт. Попробуйте позже.')
    } finally {
      setAccountDeleteLoading(false)
    }
  }

  const updateAuthForm = (event) => {
    const { name, value } = event.target
    setAuthForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetAuthMessages = () => {
    setAuthError('')
    setAuthSuccess('')
  }

  const getRussianAuthError = (message) => {
    const normalized = String(message || '').toLowerCase()

    if (normalized.includes('invalid credentials')) {
      return 'Неверный email или пароль. Проверьте данные и попробуйте снова.'
    }

    if (normalized.includes('email already exists')) {
      return 'Пользователь с таким email уже существует.'
    }

    if (normalized.includes('all fields are required')) {
      return 'Пожалуйста, заполните все поля.'
    }

    if (normalized.includes('password must be at least 6 characters')) {
      return 'Пароль должен содержать минимум 6 символов.'
    }

    if (normalized.includes('email and password are required')) {
      return 'Введите email и пароль.'
    }

    return 'Не удалось выполнить вход. Попробуйте еще раз.'
  }

  const onLogout = () => {
    localStorage.removeItem('lorefit_token')
    localStorage.removeItem('lorefit_user')
    setAuthUser(null)
    setCurrentPage('home')
  }

  const onSubmitAuth = async (event) => {
    event.preventDefault()
    resetAuthMessages()
    setAuthLoading(true)

    const endpoint = authMode === 'register' ? '/api/auth/register' : '/api/auth/login'
    const payload =
      authMode === 'register'
        ? authForm
        : {
            email: authForm.email,
            password: authForm.password,
          }

    try {
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Request failed')
      }

      localStorage.setItem('lorefit_token', data.token)
      localStorage.setItem('lorefit_user', JSON.stringify(data.user))
      setAuthUser(data.user)
      setAuthSuccess(authMode === 'register' ? 'Registration successful' : 'Login successful')
      setAuthForm({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        city: '',
      })
      setCurrentPage('home')
    } catch (error) {
      setAuthError(getRussianAuthError(error.message))
    } finally {
      setAuthLoading(false)
    }
  }

  if (currentPage === 'auth') {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <button className="back-link" type="button" onClick={() => setCurrentPage('home')}>
            ← Назад на главную
          </button>

          <section className="auth-card">
            <p className="badge">Аккаунт</p>
            <h1>{authMode === 'register' ? 'Регистрация' : 'Вход'}</h1>
            <p className="booking-text">
              {authMode === 'register'
                ? 'Создай аккаунт для доступа к магазину и заказам.'
                : 'Войди в аккаунт по email и паролю.'}
            </p>

            <div className="auth-switch">
              <button
                className={authMode === 'login' ? 'slot active' : 'slot'}
                type="button"
                onClick={() => {
                  setAuthMode('login')
                  resetAuthMessages()
                }}
              >
                Вход
              </button>
              <button
                className={authMode === 'register' ? 'slot active' : 'slot'}
                type="button"
                onClick={() => {
                  setAuthMode('register')
                  resetAuthMessages()
                }}
              >
                Регистрация
              </button>
            </div>

            <form className="auth-form" onSubmit={onSubmitAuth}>
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input
                className="date-input"
                id="email"
                name="email"
                type="email"
                value={authForm.email}
                onChange={updateAuthForm}
                required
              />

              <label className="field-label" htmlFor="password">
                Password
              </label>
              <input
                className="date-input"
                id="password"
                name="password"
                type="password"
                value={authForm.password}
                onChange={updateAuthForm}
                minLength={6}
                required
              />

              {authMode === 'register' && (
                <>
                  <label className="field-label" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    className="date-input"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={authForm.firstName}
                    onChange={updateAuthForm}
                    required
                  />

                  <label className="field-label" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    className="date-input"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={authForm.lastName}
                    onChange={updateAuthForm}
                    required
                  />

                  <label className="field-label" htmlFor="country">
                    Country
                  </label>
                  <input
                    className="date-input"
                    id="country"
                    name="country"
                    type="text"
                    value={authForm.country}
                    onChange={updateAuthForm}
                    required
                  />

                  <label className="field-label" htmlFor="city">
                    City
                  </label>
                  <input
                    className="date-input"
                    id="city"
                    name="city"
                    type="text"
                    value={authForm.city}
                    onChange={updateAuthForm}
                    required
                  />
                </>
              )}

              {authError && <p className="auth-error">{authError}</p>}
              {authSuccess && <p className="auth-success">{authSuccess}</p>}

              <button className="primary pay-button" type="submit" disabled={authLoading}>
                {authLoading
                  ? 'Подожди...'
                  : authMode === 'register'
                    ? 'Зарегистрироваться'
                    : 'Войти'}
              </button>
            </form>
          </section>
        </div>
      </div>
    )
  }



  if (currentPage === 'shop') {
    const normalizedQuery = shopSearchQuery.trim().toLowerCase()
    const categoryFilteredProducts = products.filter((item) =>
      selectedShopCategory === 'all' || item.category === selectedShopCategory,
    )
    const searchedProducts = categoryFilteredProducts.filter((item) =>
      item.name.toLowerCase().includes(normalizedQuery),
    )

    const sortedProducts = [...searchedProducts].sort((a, b) => {
      if (shopPriceSort === 'asc') {
        return a.priceKzt - b.priceKzt
      }

      if (shopPriceSort === 'desc') {
        return b.priceKzt - a.priceKzt
      }

      return a.id - b.id
    })

    return (
      <div className="page">
        <header className="hero shop-hero">
          <nav className="nav container shop-nav">
            <div className="brand">Для Народа</div>
            <div className="nav-links">
              <button className="nav-link-button" type="button" onClick={() => setCurrentPage('home')}>
                Главная
              </button>
              <button className="nav-link-button" type="button" onClick={() => setCurrentPage('shop')}>
                Товары
              </button>
              {authUser && (
                <button
                  className="nav-link-button"
                  type="button"
                  onClick={() => {
                    setCurrentPage('account')
                    loadOrdersData()
                  }}
                >
                  Личный кабинет
                </button>
              )}
              <button
                className="nav-link-button nav-cart-button"
                type="button"
                aria-label={`Корзина, товаров: ${cartItemsCount}`}
                onClick={() => setCurrentPage('cart')}
              >
                <span className="nav-cart-icon" aria-hidden="true">
                  🛒
                </span>
                <span className="nav-cart-label">Корзина</span>
                <span className="nav-cart-count">{cartItemsCount}</span>
              </button>
            </div>
            {authUser ? (
              <div className="auth-nav">
                <span className="auth-user">{authUser.firstName}</span>
                <button className="nav-button" type="button" onClick={onLogout}>
                  Выйти
                </button>
                {isAdmin && (
                  <button
                    className="nav-button admin-nav-button"
                    type="button"
                    onClick={() => {
                      setCurrentPage('admin-panel')
                      loadAdminData()
                    }}
                  >
                    Перейти в консоль администратора
                  </button>
                )}
              </div>
            ) : (
              <button className="nav-button" type="button" onClick={() => setCurrentPage('auth')}>
                Войти
              </button>
            )}
          </nav>
        </header>

        <main>
          <section className="section container shop-page-container">
            <section className="shop-card shop-catalog shop-card-wide">
              <p className="badge">Магазин товаров</p>
              <h1>Товары для дома и повседневных покупок</h1>
              <p className="booking-text">
                Выбери нужные товары для дома, кухни и повседневного использования.
              </p>

              <div className="shop-controls">
                <div>
                  <label className="field-label" htmlFor="shop-category">
                    Категория
                  </label>
                  <select
                    className="date-input"
                    id="shop-category"
                    value={selectedShopCategory}
                    onChange={(event) => setSelectedShopCategory(event.target.value)}
                  >
                    <option value="all">Все категории</option>
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="shop-search">
                    Поиск по названию
                  </label>
                  <input
                    className="date-input"
                    id="shop-search"
                    type="text"
                    value={shopSearchQuery}
                    onChange={(event) => setShopSearchQuery(event.target.value)}
                    placeholder="Введите название товара"
                  />
                </div>
                <div>
                  <label className="field-label" htmlFor="shop-sort">
                    Сортировка по цене
                  </label>
                  <select
                    className="date-input"
                    id="shop-sort"
                    value={shopPriceSort}
                    onChange={(event) => setShopPriceSort(event.target.value)}
                  >
                    <option value="default">По умолчанию</option>
                    <option value="asc">Сначала дешевле</option>
                    <option value="desc">Сначала дороже</option>
                  </select>
                </div>
              </div>

              {productsLoading && <p className="booking-text">Загрузка товаров...</p>}
              {productsError && <p className="auth-error">{productsError}</p>}

              <div className="grid cards-4 shop-grid">
                {sortedProducts.map((product) => (
                  <article
                    key={product.id}
                    className="product-card product-card-clickable"
                    role="button"
                    tabIndex={0}
                    onClick={() => openProductDetails(product.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        openProductDetails(product.id)
                      }
                    }}
                  >
                    <img className="product-image" src={product.imageUrls?.[0]} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="product-footer">
                      <div>
                        <strong>{formatKzt(product.priceKzt)}</strong>
                        <small>за {unitLabels[getProductUnitType(product)]}</small>
                      </div>
                      <button
                        className={`primary add-to-cart-button${recentlyAddedProductId === product.id ? ' is-added' : ''}`}
                        type="button"
                        disabled={product.availabilityStatus !== 'in_stock'}
                        onClick={(event) => {
                          event.stopPropagation()
                          addToCart(product)
                        }}
                      >
                        В корзину
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {!productsLoading && sortedProducts.length === 0 && (
                <p className="booking-text">Товары по вашему запросу не найдены.</p>
              )}
            </section>
          </section>
        </main>
      </div>
    )
  }

  if (currentPage === 'product-details' && selectedProduct) {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <button className="back-link" type="button" onClick={() => setCurrentPage('shop')}>
            ← Назад к товарам
          </button>

          <section className="shop-card">
            <p className="badge">Карточка товара</p>
            <h1>{selectedProduct.name}</h1>
            <img className="product-detail-image" src={selectedProduct.imageUrls?.[0]} alt={selectedProduct.name} />

            <div className="detail-grid">
              <div className="summary-row">
                <span>ID</span>
                <strong>{selectedProduct.id}</strong>
              </div>
              <div className="summary-row">
                <span>Категория</span>
                <strong>{categoryLabels[selectedProduct.category]}</strong>
              </div>
              <div className="summary-row">
                <span>Цена</span>
                <strong>{formatKzt(selectedProduct.priceKzt)} за {unitLabels[getProductUnitType(selectedProduct)]}</strong>
              </div>
              <div className="summary-row">
                <span>Единица измерения</span>
                <strong>{unitLabels[getProductUnitType(selectedProduct)]}</strong>
              </div>
              <div className="summary-row">
                <span>Остаток</span>
                <strong>{selectedProduct.stockQuantity} {unitLabels[getProductUnitType(selectedProduct)]}</strong>
              </div>
              <div className="summary-row">
                <span>Статус наличия</span>
                <strong>{statusLabels[selectedProduct.availabilityStatus]}</strong>
              </div>
              <div className="summary-row">
                <span>Статус активности</span>
                <strong>{selectedProduct.isActive ? 'Активен' : 'Неактивен'}</strong>
              </div>
            </div>

            <p className="booking-text product-detail-description">{selectedProduct.description}</p>

            <button
              className="primary"
              type="button"
              disabled={selectedProduct.availabilityStatus !== 'in_stock'}
              onClick={() => addToCart(selectedProduct)}
            >
              Добавить в корзину
            </button>
          </section>
        </div>
      </div>
    )
  }

  if (currentPage === 'cart') {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <button className="back-link" type="button" onClick={() => setCurrentPage('shop')}>
            ← Назад к товарам
          </button>

          <section className="shop-card">
            <p className="badge">Корзина</p>
            <h1>Твои товары</h1>

            {cartItems.length === 0 ? (
              <p className="booking-text">Корзина пока пуста. Добавь товары в разделе «Товары».</p>
            ) : (
              <>
                <div className="cart-list">
                  {cartItems.map((item) => (
                    <article key={item.productId} className="cart-item">
                      <div>
                        <h3>{item.name}</h3>
                        <p>{formatKzt(item.priceKzt)} за {getQuantityDisplay(1, item.unitType)}</p>
                      </div>
                      <div className="cart-item-controls">
                        <div className="quantity-stepper">
                          <button
                            type="button"
                            className="slot quantity-button"
                            onClick={() => changeCartQuantity(item.productId, item.quantity - getQuantityIncrement(item.unitType))}
                          >
                            -
                          </button>
                          <span className="quantity-display">{getQuantityDisplay(item.quantity, item.unitType)}</span>
                          <button
                            type="button"
                            className="slot quantity-button"
                            onClick={() => changeCartQuantity(item.productId, item.quantity + getQuantityIncrement(item.unitType))}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="secondary cart-remove-button"
                          onClick={() => removeFromCart(item.productId)}
                        >
                          Удалить
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="summary-row total">
                  <span>Итого</span>
                  <strong>{formatKzt(cartTotalKzt)}</strong>
                </div>

                <button className="primary pay-button" type="button" onClick={() => setCurrentPage('checkout')}>
                  Перейти к оформлению
                </button>
              </>
            )}
          </section>
        </div>
      </div>
    )
  }

  if (currentPage === 'checkout') {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <button className="back-link" type="button" onClick={() => setCurrentPage('cart')}>
            ← Назад в корзину
          </button>

          <div className="booking-layout">
            <section className="booking-card">
              <p className="badge">Оформление заказа</p>
              <h1>Подтверди заказ</h1>

              <div className="cart-list">
                {cartItems.map((item) => (
                  <div key={item.productId} className="summary-row">
                    <span>
                      {item.name} × {getQuantityDisplay(item.quantity, item.unitType)}
                    </span>
                    <strong>{formatKzt(item.priceKzt * item.quantity)}</strong>
                  </div>
                ))}
              </div>

              <p className="field-label">Способ получения</p>
              <div className="auth-switch">
                <button
                  className={fulfillmentType === 'pickup' ? 'slot active' : 'slot'}
                  type="button"
                  onClick={() => setFulfillmentType('pickup')}
                >
                  Самовывоз
                </button>
                <button
                  className={fulfillmentType === 'delivery' ? 'slot active' : 'slot'}
                  type="button"
                  onClick={() => setFulfillmentType('delivery')}
                >
                  Доставка
                </button>
              </div>

              {fulfillmentType === 'delivery' && (
                <>
                  <label className="field-label" htmlFor="delivery-address">
                    Адрес доставки
                  </label>
                  <input
                    className="date-input"
                    id="delivery-address"
                    type="text"
                    value={deliveryAddress}
                    onChange={(event) => setDeliveryAddress(event.target.value)}
                    placeholder="Город, улица, дом, квартира"
                    required
                  />
                </>
              )}

              {orderError && <p className="auth-error">{orderError}</p>}
            </section>

            <aside className="summary-card">
              <h3>Оплата</h3>
              <div className="summary-row total">
                <span>К оплате</span>
                <strong>{formatKzt(cartTotalKzt)}</strong>
              </div>
              <button className="primary pay-button" type="button" disabled={orderLoading} onClick={submitOrder}>
                {orderLoading ? 'Обработка...' : 'Оплатить заказ'}
              </button>
            </aside>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'order-success') {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <section className="shop-card success-card">
            <p className="badge">Успешно</p>
            <h1>Ваш заказ подтвержден</h1>
            <p className="booking-text">
              Номер заказа: <strong>#{lastOrder?.id}</strong>
            </p>
            <p className="booking-text">Сумма: {formatKzt(lastOrder?.totalAmountKzt || 0)}</p>
            <button className="primary" type="button" onClick={() => setCurrentPage('home')}>
              Вернуться на главную
            </button>
          </section>
        </div>
      </div>
    )
  }

  if (currentPage === 'account') {
    return (
      <div className="page">
        <header className="hero shop-hero">
          <nav className="nav container shop-nav">
            <div className="brand">Для Народа</div>
            <div className="nav-links">
              <button className="nav-link-button" type="button" onClick={() => setCurrentPage('home')}>
                Главная
              </button>
              <button className="nav-link-button" type="button" onClick={() => setCurrentPage('shop')}>
                Товары
              </button>
              <button className="nav-link-button" type="button" onClick={() => setCurrentPage('account')}>
                Личный кабинет
              </button>
            </div>
            {authUser ? (
              <div className="auth-nav">
                <span className="auth-user">{authUser.firstName}</span>
                <button className="nav-button" type="button" onClick={onLogout}>
                  Выйти
                </button>
              </div>
            ) : (
              <button className="nav-button" type="button" onClick={() => setCurrentPage('auth')}>
                Войти
              </button>
            )}
          </nav>
        </header>

        <main>
          <section className="section container shop-page-container">
            <section className="shop-card shop-card-wide">
              <p className="badge">Личный кабинет</p>
              <h1>Настройки аккаунта</h1>

              <div className="account-layout">
                <aside className="account-sidebar">
                  <button
                    className={accountTab === 'profile' ? 'slot active' : 'slot'}
                    type="button"
                    onClick={() => setAccountTab('profile')}
                  >
                    Профиль пользователя
                  </button>
                  <button
                    className={accountTab === 'active' ? 'slot active' : 'slot'}
                    type="button"
                    onClick={() => {
                      setAccountTab('active')
                      loadOrdersData()
                    }}
                  >
                    Активные заказы
                  </button>
                  <button
                    className={accountTab === 'history' ? 'slot active' : 'slot'}
                    type="button"
                    onClick={() => {
                      setAccountTab('history')
                      loadOrdersData()
                    }}
                  >
                    История покупок
                  </button>
                  <button
                    className={accountTab === 'management' ? 'slot active' : 'slot'}
                    type="button"
                    onClick={() => setAccountTab('management')}
                  >
                    Управление аккаунтом
                  </button>
                </aside>

                <div className="account-content">
                  {(accountTab === 'active' || accountTab === 'history') && ordersLoading && (
                    <p className="booking-text">Загрузка...</p>
                  )}
                  {(accountTab === 'active' || accountTab === 'history') && ordersError && (
                    <p className="auth-error">{ordersError}</p>
                  )}

                  {accountTab === 'profile' && (
                    <div className="account-panel">
                      <h2 className="account-subtitle">Профиль пользователя</h2>
                      <div className="detail-grid">
                        <div className="summary-row">
                          <span>Имя</span>
                          <strong>{authUser?.firstName || '-'}</strong>
                        </div>
                        <div className="summary-row">
                          <span>Фамилия</span>
                          <strong>{authUser?.lastName || '-'}</strong>
                        </div>
                        <div className="summary-row">
                          <span>Email</span>
                          <strong>{authUser?.email || '-'}</strong>
                        </div>
                        <div className="summary-row">
                          <span>Страна</span>
                          <strong>{authUser?.country || '-'}</strong>
                        </div>
                        <div className="summary-row">
                          <span>Город</span>
                          <strong>{authUser?.city || '-'}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {accountTab === 'active' && (
                    <div className="account-panel">
                      <h2 className="account-subtitle">Активные заказы</h2>
                      <div className="cart-list">
                        {activeOrders.map((order) => (
                          <article className="cart-item" key={order.id}>
                            <div>
                              <h3>Заказ #{order.id}</h3>
                              <p>{new Date(order.createdAt).toLocaleString('ru-RU')}</p>
                              <p>Статус: {orderStatusLabels[order.status] || order.status}</p>
                              <p>
                                Состав: {(order.items || [])
                                  .map((item) => `${item.name} × ${item.quantity}`)
                                  .join(', ')}
                              </p>
                            </div>
                            <strong>{formatKzt(order.totalAmountKzt)}</strong>
                          </article>
                        ))}
                        {!ordersLoading && activeOrders.length === 0 && (
                          <p className="booking-text">Активных заказов пока нет.</p>
                        )}
                      </div>
                    </div>
                  )}

                  {accountTab === 'history' && (
                    <div className="account-panel">
                      <h2 className="account-subtitle">История покупок</h2>
                      <div className="cart-list">
                        {historyOrders.map((order) => (
                          <article className="cart-item" key={`history-order-${order.id}`}>
                            <div>
                              <h3>Заказ #{order.id}</h3>
                              <p>{new Date(order.createdAt).toLocaleString('ru-RU')}</p>
                              <p>Статус: {orderStatusLabels[order.status] || order.status}</p>
                              <p>
                                Состав: {(order.items || [])
                                  .map((item) => `${item.name} × ${item.quantity}`)
                                  .join(', ')}
                              </p>
                            </div>
                            <strong>{formatKzt(order.totalAmountKzt)}</strong>
                          </article>
                        ))}

                        {!ordersLoading && historyOrders.length === 0 && (
                          <p className="booking-text">История покупок пока пуста.</p>
                        )}
                      </div>
                    </div>
                  )}

                  {accountTab === 'management' && (
                    <div className="account-panel">
                      <h2 className="account-subtitle">Управление аккаунтом</h2>
                      <p className="booking-text">Действие необратимо: все личные данные будут удалены.</p>
                      {accountDeleteError && <p className="auth-error">{accountDeleteError}</p>}
                      <button
                        className="secondary"
                        type="button"
                        disabled={accountDeleteLoading}
                        onClick={deleteAccount}
                      >
                        {accountDeleteLoading ? 'Удаление...' : 'Удалить аккаунт'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    )
  }

  if (currentPage === 'admin-panel') {
    return (
      <div className="booking-page">
        <div className="booking-shell container">
          <button className="back-link" type="button" onClick={() => setCurrentPage('home')}>
            ← Назад на главную
          </button>

          <section className="shop-card">
            <p className="badge">Администратор</p>
            <h1>Управление товарами и заказами</h1>

            {!isAdmin ? (
              <p className="auth-error">Доступ только для администратора.</p>
            ) : (
              <>
                <div className="admin-page-head">
                  <div className="auth-switch admin-tabs">
                    <button
                      className={adminTab === 'products' ? 'slot active' : 'slot'}
                      type="button"
                      onClick={() => setAdminTab('products')}
                    >
                      Товары
                    </button>
                    <button
                      className={adminTab === 'orders' ? 'slot active' : 'slot'}
                      type="button"
                      onClick={() => setAdminTab('orders')}
                    >
                      Заказы
                    </button>
                  </div>
                  <button className="secondary" type="button" onClick={loadAdminData}>
                    Обновить данные
                  </button>
                </div>

                {adminLoading && <p className="booking-text">Загрузка...</p>}
                {adminError && <p className="auth-error">{adminError}</p>}
                {adminSuccess && <p className="auth-success">{adminSuccess}</p>}

                {adminTab === 'products' && (
                  <div className="admin-layout admin-layout-products">
                    <div className="admin-main admin-main-wide">
                      <h3>Поиск и фильтры</h3>
                      <div className="admin-filters-grid">
                        <div>
                          <label className="field-label" htmlFor="admin-products-search">
                            Поиск товара
                          </label>
                          <input
                            className="date-input"
                            id="admin-products-search"
                            type="text"
                            value={adminProductQuery}
                            onChange={(event) => setAdminProductQuery(event.target.value)}
                            placeholder="ID, название, описание"
                          />
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-products-category-filter">
                            Категория
                          </label>
                          <select
                            className="date-input"
                            id="admin-products-category-filter"
                            value={adminProductCategoryFilter}
                            onChange={(event) => setAdminProductCategoryFilter(event.target.value)}
                          >
                            <option value="all">Все категории</option>
                            {Object.entries(categoryLabels).map(([key, label]) => (
                              <option key={key} value={key}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-products-active-filter">
                            Активность
                          </label>
                          <select
                            className="date-input"
                            id="admin-products-active-filter"
                            value={adminProductAvailabilityFilter}
                            onChange={(event) => setAdminProductAvailabilityFilter(event.target.value)}
                          >
                            <option value="all">Все</option>
                            <option value="active">Только активные</option>
                            <option value="inactive">Только неактивные</option>
                          </select>
                        </div>
                      </div>

                      <button
                        className="primary pay-button"
                        type="button"
                        onClick={() => {
                          setAdminEditingProductId(null)
                          setAdminProductForm({
                            name: '',
                            category: 'equipment',
                            description: '',
                            priceKzt: '',
                            stockQuantity: '',
                            imageUrlsText: '',
                            isActive: true,
                          })
                          setAdminProductModalOpen(true)
                        }}
                      >
                        Добавить товар
                      </button>
                    </div>

                    <div className="admin-main admin-main-wide">
                      <h2 className="account-subtitle">Список товаров</h2>
                      <div className="cart-list admin-products-list">
                        {filteredAdminProducts.map((product) => (
                          <article className="cart-item admin-product-item" key={`admin-product-${product.id}`}>
                            <div>
                              <h3>{product.name}</h3>
                              <p>ID: {product.id}</p>
                              <p>Категория: {categoryLabels[product.category] || product.category}</p>
                              <p>Цена: {formatKzt(product.priceKzt)}</p>
                              <p>Остаток: {product.stockQuantity} шт.</p>
                              <p>Статус: {product.isActive ? 'Активен' : 'Неактивен'}</p>
                            </div>
                            <div className="admin-actions vertical admin-product-actions">
                              <button className="secondary" type="button" onClick={() => editAdminProduct(product)}>
                                Редактировать
                              </button>
                              <button
                                className="secondary"
                                type="button"
                                onClick={() => setAdminDeleteProductId(product.id)}
                              >
                                Удалить
                              </button>
                            </div>
                          </article>
                        ))}
                        {!adminLoading && filteredAdminProducts.length === 0 && (
                          <p className="booking-text">Товары не найдены.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {adminTab === 'orders' && (
                  <div className="admin-layout admin-layout-products">
                    <div className="admin-main admin-main-wide">
                      <h3>Поиск и фильтры</h3>
                      <div className="admin-filters-grid admin-filters-grid-orders">
                        <div>
                          <label className="field-label" htmlFor="admin-orders-search">
                            Поиск заказа
                          </label>
                          <input
                            className="date-input"
                            id="admin-orders-search"
                            type="text"
                            value={adminOrderQuery}
                            onChange={(event) => setAdminOrderQuery(event.target.value)}
                            placeholder="№ заказа или товар"
                          />
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-orders-status-filter">
                            Статус
                          </label>
                          <select
                            className="date-input"
                            id="admin-orders-status-filter"
                            value={adminOrderStatusFilter}
                            onChange={(event) => setAdminOrderStatusFilter(event.target.value)}
                          >
                            <option value="all">Все статусы</option>
                            {orderStatusOptions.map((status) => (
                              <option key={status} value={status}>
                                {orderStatusLabels[status]}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-orders-date-from">
                            Дата от
                          </label>
                          <input
                            className="date-input"
                            id="admin-orders-date-from"
                            type="date"
                            value={adminOrderDateFrom}
                            onChange={(event) => setAdminOrderDateFrom(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-orders-date-to">
                            Дата до
                          </label>
                          <input
                            className="date-input"
                            id="admin-orders-date-to"
                            type="date"
                            value={adminOrderDateTo}
                            onChange={(event) => setAdminOrderDateTo(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-orders-sum-min">
                            Сумма от (₸)
                          </label>
                          <input
                            className="date-input"
                            id="admin-orders-sum-min"
                            type="number"
                            min="0"
                            value={adminOrderMinSum}
                            onChange={(event) => setAdminOrderMinSum(event.target.value)}
                          />
                        </div>

                        <div>
                          <label className="field-label" htmlFor="admin-orders-sum-max">
                            Сумма до (₸)
                          </label>
                          <input
                            className="date-input"
                            id="admin-orders-sum-max"
                            type="number"
                            min="0"
                            value={adminOrderMaxSum}
                            onChange={(event) => setAdminOrderMaxSum(event.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="admin-main admin-main-wide">
                      <h2 className="account-subtitle">Список заказов</h2>
                      <div className="cart-list admin-products-list">
                        {filteredAdminOrders.map((order) => (
                          <article className="cart-item admin-product-item" key={`admin-order-${order.id}`}>
                            <div>
                              <h3>Заказ #{order.id}</h3>
                              <p>{new Date(order.createdAt).toLocaleString('ru-RU')}</p>
                              <p>Статус: {orderStatusLabels[order.status] || order.status}</p>
                              <p>Сумма: {formatKzt(order.totalAmountKzt)}</p>
                              <p>
                                Состав: {(order.items || [])
                                  .map((item) => `${item.name} × ${item.quantity}`)
                                  .join(', ')}
                              </p>
                            </div>
                            <div className="admin-actions vertical admin-product-actions">
                              <button
                                className="primary"
                                type="button"
                                onClick={() => {
                                  setAdminStatusModalOrderId(order.id)
                                  setAdminStatusModalValue(order.status)
                                }}
                              >
                                Изменить статус
                              </button>
                            </div>
                          </article>
                        ))}
                        {!adminLoading && filteredAdminOrders.length === 0 && (
                          <p className="booking-text">Заказы не найдены.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {adminProductModalOpen && (
                  <div className="admin-modal-overlay" role="dialog" aria-modal="true">
                    <div className="admin-modal-card">
                      <h2>{adminEditingProductId ? 'Редактировать товар' : 'Создать товар'}</h2>
                      <form className="auth-form admin-form" onSubmit={submitAdminProduct}>
                        <div className="admin-price-preview">
                          <div className="summary-row">
                            <span>Дата заполнения</span>
                            <strong>{adminCreatedAtLabel}</strong>
                          </div>
                        </div>

                        <label className="field-label" htmlFor="admin-name">
                          Название
                        </label>
                        <input
                          className="date-input"
                          id="admin-name"
                          name="name"
                          type="text"
                          value={adminProductForm.name}
                          onChange={updateAdminProductForm}
                          required
                        />

                        <label className="field-label" htmlFor="admin-category">
                          Категория
                        </label>
                        <select
                          className="date-input"
                          id="admin-category"
                          name="category"
                          value={adminProductForm.category}
                          onChange={updateAdminProductForm}
                        >
                          {Object.entries(categoryLabels).map(([key, label]) => (
                            <option key={key} value={key}>
                              {label}
                            </option>
                          ))}
                        </select>

                        <label className="field-label" htmlFor="admin-description">
                          Описание
                        </label>
                        <textarea
                          className="date-input admin-textarea"
                          id="admin-description"
                          name="description"
                          value={adminProductForm.description}
                          onChange={updateAdminProductForm}
                          required
                        />

                        <div className="admin-price-grid">
                          <div>
                            <label className="field-label" htmlFor="admin-price">
                              Цена (₸)
                            </label>
                            <input
                              className="date-input"
                              id="admin-price"
                              name="priceKzt"
                              type="number"
                              min="1"
                              value={adminProductForm.priceKzt}
                              onChange={updateAdminProductForm}
                              required
                            />
                          </div>

                          <div>
                            <label className="field-label" htmlFor="admin-markup">
                              % надбавки
                            </label>
                            <input
                              className="date-input"
                              id="admin-markup"
                              name="markupPercent"
                              type="number"
                              min="0"
                              step="0.1"
                              value={adminProductForm.markupPercent}
                              onChange={updateAdminProductForm}
                            />
                          </div>
                        </div>

                        <div className="admin-price-preview">
                          <div className="summary-row">
                            <span>Цена с надбавкой</span>
                            <strong>{formatKzt(adminPriceWithMarkup)}</strong>
                          </div>
                        </div>

                        <label className="field-label" htmlFor="admin-stock">
                          Количество на складе
                        </label>
                        <input
                          className="date-input"
                          id="admin-stock"
                          name="stockQuantity"
                          type="number"
                          min="0"
                          value={adminProductForm.stockQuantity}
                          onChange={updateAdminProductForm}
                          required
                        />

                        <div className="admin-price-preview total">
                          <div className="summary-row total">
                            <span>Итого всего цена</span>
                            <strong>{formatKzt(adminTotalWithMarkup)}</strong>
                          </div>
                        </div>

                        <label className="field-label" htmlFor="admin-unit-type">
                          Единица измерения
                        </label>
                        <select
                          className="date-input"
                          id="admin-unit-type"
                          name="unitType"
                          value={adminProductForm.unitType}
                          onChange={updateAdminProductForm}
                        >
                          <option value="piece">шт (штуки)</option>
                          <option value="kg">кг (килограммы)</option>
                          <option value="ml">мл (миллилитры)</option>
                          <option value="g">г (граммы)</option>
                        </select>

                        <label className="field-label" htmlFor="admin-images">
                          Изображения (через запятую)
                        </label>
                        <input
                          className="date-input"
                          id="admin-images"
                          name="imageUrlsText"
                          type="text"
                          value={adminProductForm.imageUrlsText}
                          onChange={updateAdminProductForm}
                        />

                        <label className="admin-checkbox">
                          <input
                            type="checkbox"
                            name="isActive"
                            checked={adminProductForm.isActive}
                            onChange={updateAdminProductForm}
                          />
                          Активный товар
                        </label>

                        <div className="admin-actions">
                          <button className="secondary" type="button" onClick={exportAdminProductToExcel}>
                            Выгрузить в Excel
                          </button>
                          <button className="primary" type="submit">
                            {adminEditingProductId ? 'Сохранить изменения' : 'Создать товар'}
                          </button>
                          <button className="secondary" type="button" onClick={resetAdminProductForm}>
                            Отмена
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {adminDeleteProductId !== null && (
                  <div className="admin-modal-overlay" role="dialog" aria-modal="true">
                    <div className="admin-modal-card small">
                      <h2>Подтверждение удаления</h2>
                      <p className="booking-text">Вы уверены, что хотите удалить товар?</p>
                      <div className="admin-actions">
                        <button className="primary" type="button" onClick={() => deleteAdminProduct(adminDeleteProductId)}>
                          Да, удалить
                        </button>
                        <button className="secondary" type="button" onClick={() => setAdminDeleteProductId(null)}>
                          Отмена
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {adminStatusModalOrderId !== null && (
                  <div className="admin-modal-overlay" role="dialog" aria-modal="true">
                    <div className="admin-modal-card small">
                      <h2>Изменить статус заказа</h2>
                      <label className="field-label" htmlFor="admin-status-modal-select">
                        Новый статус
                      </label>
                      <select
                        className="date-input"
                        id="admin-status-modal-select"
                        value={adminStatusModalValue}
                        onChange={(event) => setAdminStatusModalValue(event.target.value)}
                      >
                        {orderStatusOptions.map((status) => (
                          <option key={status} value={status}>
                            {orderStatusLabels[status]}
                          </option>
                        ))}
                      </select>

                      <div className="admin-actions">
                        <button
                          className="primary"
                          type="button"
                          onClick={() => updateAdminOrderStatus(adminStatusModalOrderId, adminStatusModalValue)}
                        >
                          Сохранить
                        </button>
                        <button className="secondary" type="button" onClick={() => setAdminStatusModalOrderId(null)}>
                          Отмена
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav container">
          <div className="brand">Для Народа</div>
          <div className="nav-links">
            <a className="nav-link-button" href="#products">Товары</a>
            <a className="nav-link-button" href="#about">О магазине</a>
            <a className="nav-link-button" href="#reviews">Отзывы</a>
            <button className="nav-link-button" type="button" onClick={() => setCurrentPage('shop')}>
              Магазин
            </button>
            {authUser && (
              <button
                className="nav-link-button"
                type="button"
                onClick={() => {
                  setCurrentPage('account')
                  loadOrdersData()
                }}
              >
                Личный кабинет
              </button>
            )}
            <button
              className="nav-link-button nav-cart-button"
              type="button"
              aria-label={`Корзина, товаров: ${cartItemsCount}`}
              onClick={() => setCurrentPage('cart')}
            >
              <span className="nav-cart-icon" aria-hidden="true">
                🛒
              </span>
              <span className="nav-cart-label">Корзина</span>
              <span className="nav-cart-count">{cartItemsCount}</span>
            </button>
          </div>
          {authUser ? (
            <div className="auth-nav">
              <span className="auth-user">{authUser.firstName}</span>
              <button className="nav-button" type="button" onClick={onLogout}>
                Выйти
              </button>
              {isAdmin && (
                <button
                  className="nav-button admin-nav-button"
                  type="button"
                  onClick={() => {
                    setCurrentPage('admin-panel')
                    loadAdminData()
                  }}
                >
                  Перейти в консоль администратора
                </button>
              )}
            </div>
          ) : (
            <button className="nav-button" type="button" onClick={() => setCurrentPage('auth')}>
              Войти
            </button>
          )}
        </nav>

        <div className="hero-content container">
          <div>
            <p className="badge">Маркетплэйс продуктов и товаров</p>
            <h1>Все необходимое для вашего дома в одном месте</h1>
            <p className="hero-text">
              Широкий ассортимент овощей, фруктов и бытовой химии. Быстрая доставка и качественные товары для вашего дома.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => setCurrentPage('shop')}>
                Перейти в магазин
              </button>
            </div>
          </div>

          <div className="hero-card">
            <p className="hero-card-title">Популярный товар</p>
            <h3>Помидоры свежие</h3>
            <p>Свежие помидоры с грядки, прямо доставленные вам домой.</p>
            <div className="hero-meta">
              <span>4.9 ★</span>
              <span>1 240 покупок</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section container" id="products">
          <div className="section-head">
            <h2>Популярные товары</h2>
            <p>Выбирайте из нашего ассортимента товаров для дома и повседневных покупок.</p>
          </div>
          <div className="grid cards-4">
            {products.slice(0, 4).map((product) => (
              <article key={product.id} className="card-item">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>{formatKzt(product.priceKzt)}</span>
                <button
                  className="primary category-buy-button"
                  type="button"
                  onClick={() => openProductDetails(product.id)}
                >
                  Посмотреть товар
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="about">
          <div className="container">
            <div className="section-head">
              <h2>О нашем магазине</h2>
              <p>Мы предлагаем качественные товары для дома, кухни и ежедневного использования.</p>
            </div>
            <div className="grid cards-3">
              <article className="trainer-card">
                <div className="avatar" aria-hidden="true">🏆</div>
                <h3>Качественные товары</h3>
                <p>Только проверенные бренды и высокое качество.</p>
                <span>100% гарантия</span>
              </article>
              <article className="trainer-card">
                <div className="avatar" aria-hidden="true">🚚</div>
                <h3>Быстрая доставка</h3>
                <p>Доставка по всему Казахстану в кратчайшие сроки.</p>
                <span>От 1 дня</span>
              </article>
              <article className="trainer-card">
                <div className="avatar" aria-hidden="true">💪</div>
                <h3>Для всех уровней</h3>
                <p>Товары для начинающих и профессионалов.</p>
                <span>Широкий ассортимент</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section container" id="how">
          <div className="section-head">
            <h2>Как купить</h2>
          </div>
          <div className="grid cards-3 steps">
            <article className="step-card">
              <div className="step-number">01</div>
              <h3>Выберите товар</h3>
              <p>Просмотрите наш каталог и добавьте товары в корзину.</p>
            </article>
            <article className="step-card">
              <div className="step-number">02</div>
              <h3>Оформите заказ</h3>
              <p>Укажите адрес доставки и оплатите удобным способом.</p>
            </article>
            <article className="step-card">
              <div className="step-number">03</div>
              <h3>Получите товар</h3>
              <p>Мы доставим ваш заказ быстро и качественно.</p>
            </article>
          </div>
        </section>

        <section className="section container" id="reviews">
          <div className="section-head">
            <h2>Что говорят пользователи</h2>
          </div>
          <div className="grid cards-2">
            {reviews.map((review) => (
              <blockquote key={review.author} className="review-card">
                <p>“{review.text}”</p>
                <cite>{review.author}</cite>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Начните покупки уже сегодня</h2>
            <p>Зарегистрируйтесь и получите доступ к полному ассортименту товаров.</p>
          </div>
          <button className="primary" onClick={() => setCurrentPage('shop')}>
            Перейти в магазин
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
