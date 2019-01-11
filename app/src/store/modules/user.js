import firebase from "firebase";

const getDefaultState = () => {
  return {
    uid: "",
    email: "",
    authenticated: false
  };
};

const user = {
  state: getDefaultState(),
  mutations: {
    SET_USER(state, user) {
      console.log('set');
      state.uid = user.uid;
      state.email = user.email;
      console.log('jas est')
    },
    SET_USER_AUTHENTICATED(state, bool){
      state.authenticated = bool;
    },
    SET_LOGOUT(state) {
      Object.assign(state, getDefaultState());
    }
  },
  /**
   * Contex object
   * commit,
   */
  actions: {
    /**
     *
     * @param {*} context - commit,
     * @param {*} user — email, password
     */
    login({ commit }, { email, pw }) {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, pw)
          .then(user => {
            console.log(user);
            commit("SET_USER", user);
            commit("SET_USER_AUTHENTICATED", true);
            resolve(user);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    async logout({ commit }) {
      try {
        commit("SET_LOGOUT", await firebase.auth().signOut());
      } catch (err) {
        console.log(err);
      }
    },
    // https://github.com/vuejs/vuefire/issues/18
    checkAuthState({ commit, state }) {
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
           if (user) {
            commit("SET_USER_AUTHENTICATED", true);
            commit("SET_USER", {email: user.email, uid: user.uid});
            resolve(user);
          } else {
            commit("SET_USER_AUTHENTICATED", false);
            resolve("user not logged in");
          }
        });
      });
    }
  },
  getters: {
    currentUser: state => state.email
  }
};

export default user;
