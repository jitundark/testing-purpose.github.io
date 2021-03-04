import compHome from './components/Home.vue' //component guloke import korbo age
import compAbout from './components/About.vue' //component guloke import korbo age
import compContact from './components/Contact.vue' //component guloke import korbo age
//import compCustomer from './components/Customer/Customer.vue'
export const routes = [
    {
        path: '/',
        component:compHome
    },
    {
        path: '/about',
        component:compAbout
    },
    {
        path: '/contact',
        component:compContact
    },
    // {
    //     path: '/customer',
    //     component:compCustomer
    // }
];