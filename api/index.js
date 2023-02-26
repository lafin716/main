import axios from 'axios'

const products = axios.create({
  baseURL: 'http://localhost:3000/products',
})

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts',
})

function fetchProducts() {
  return products.get()
}

function fetchProductById(id) {
  return products.get(`/${id}`)
}

function fetchProductByKeyword(keyword) {
  return products.get('/', {
    params: {
      name_like: keyword,
    },
  })
}

function fetchCartItems() {
  return carts.get()
}

function createCartItem(item) {
  return carts.post('/', item)
}

export {
  fetchProducts,
  fetchProductById,
  fetchProductByKeyword,
  fetchCartItems,
  createCartItem,
}
