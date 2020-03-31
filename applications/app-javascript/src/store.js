/* store module */

export default {
  namespaced: true, // namespaced must be true in module app.
  state: {
    name: process.env.VUE_APP_NAME,
    loginApp:'我是测试javascript'
  },
  mutations: {
    changeLogin(state,data){
      state.loginApp = data;
    }
  },
  actions: {},
};
