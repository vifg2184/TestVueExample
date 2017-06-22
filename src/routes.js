/**
 * Created by VladimirIlich on 18/6/2017.
 */

const HolaMundo = require('./components/HolaMundo.vue');
const Well = require('./components/Contador.vue');
const Post = require('./components/Post.vue');
const Admin = require('./components/Admin.vue');
const AdminUsers = require('./components/AdminUsers.vue');

export const routes = [
    {path: '/hola-mundo',component: HolaMundo},
    {path: '/well',component: Well},
    {path: '/post/:id',component: Post},
    {path: '/admin',component: Admin,
        children:[
            {
                path:'users',
                component:AdminUsers
            }
        ]
    }
]