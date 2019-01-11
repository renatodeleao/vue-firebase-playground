import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import firebase from "firebase";
import store from "./store.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: () => import("./views/404.vue")
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: {
        notForLoggedInUser: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/auth/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      meta: {
        notForLoggedInUser: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/auth/Signup.vue")
    },
    {
      path: "/app",
      name: "app",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/app/index.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach( async (to, from, next) => {
  console.log('test')
  if(!store.state.user.authenticated){
    await store.dispatch('checkAuthState');
    console.log('test 2')
  }

  const currentUser = store.state.user.authenticated;
  const viewRequiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const isAuthenticationView = to.matched.some(router => router.meta.notForLoggedInUser);
  if (viewRequiresAuth && !currentUser) {
    next("login");
  } else if (!viewRequiresAuth && isAuthenticationView && currentUser) {
    console.log('asd')
    next(from.path);
  } else {
    next();
  }
});

export default router;
