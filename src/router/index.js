import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import CategoriaView from '../views/CategoriaView.vue'
import BuscarView from '../views/BuscarView.vue'
import PaginaBuscar from '../views/PaginaBuscar.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: CategoriaView
  
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: BuscarView
  },
  {
    //***Este seria una ruta con parametros***//
    path: '/busquedafiltrada/:id/:lista',
    name: 'PaginaBuscar',
    component: PaginaBuscar
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
