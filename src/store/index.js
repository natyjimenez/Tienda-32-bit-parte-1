import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [
      { id: '001', nombre: 'Sekiro', stock: 100, precio: 30000 },
      { id: '002', nombre: 'Fifa 21', stock: 100, precio: 25000 },
      { id: '003', nombre: 'Gears of War 4', stock: 100, precio: 15000 },
      { id: '004', nombre: 'Mario Tennis Aces', stock: 100, precio: 35000 },
      { id: '005', nombre: 'Bloodborne', stock: 100, precio: 10000 },
      { id: '006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000 },
    ],
  },
  getters: {
    productosConStock: (state) => {
      return state.juguetes.filter((producto) => {
        return producto.stock > 0
      })
    },
    productoDisponiblePorId: (state, getters) => (producto) => {
      return getters.productosConStock.filter((p) => p.id == producto || p.nombre.toLowerCase().includes(producto))
    },
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    
  }
})
