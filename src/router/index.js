import { createRouter, createWebHistory } from "vue-router";
import Emit from '../components/layout/Emit.vue'
import Nested from '../components/layout/Nested.vue'
import Props from '../components/layout/Props.vue'
import Slot from '../components/layout/Slot.vue'
import Welcome from '../components/layout/Welcome.vue'

const routes = [
    {path: '/', component: Welcome},
    {path: '/nested', component: Nested},
    {path: '/props', component: Props},
    {path: '/emit', component: Emit},
    {path: '/slot', component: Slot},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;