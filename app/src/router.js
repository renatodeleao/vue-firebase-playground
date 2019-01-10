import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import firebase from "firebase";

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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/auth/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const viewRequiresAuth = to.matched.some(route => route.meta.requiresAuth);

  if (viewRequiresAuth && !currentUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
