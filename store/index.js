import { fetchCartItems } from '~/api'

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, item) {
    const newCartItem = {
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },

  setCartItems(state, items) {
    state.cartItems = items
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    const newItems = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    commit('setCartItems', newItems)
  },

  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  // },
}
