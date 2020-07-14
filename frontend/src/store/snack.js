// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
// // import type from './modules/type'

// // Load Vue
// Vue.use(Vuex)

// // Create Store
// export default new Vuex.Store({
//     state: {
//         snackbar: { showing: false, text: '' },
//         users: [],
//     },
//     mutations: {
//         SET_SNACKBAR(state, snackbar) {
//             state.snackbar = snackbar
//         },
//         SET_USERS(state, users) {
//             state.users = users
//         }
//     },
//     actions: {
//         setSnackbar({ commit }, snackbar) {
//             commit('SET_SNACKBAR', snackbar);
//         },
//         async loadUsers({ commit }) {
//             let res = await axios.get('/api/user')
//             let users = res.data.users
//             commit('SET_USERS', users.map(u => u.attributed))
//         }
//     },
//     // modules:{
//     //     type,
//     // }
// });