import axios from 'axios';
const url = 'http://localhost:8080/api/';
export default {
    login(credentials) {
        return axios
            .post(url + 'login/', credentials)
            .then(response => response.data);
    },
    signUp(credentials) {
        return axios
            .post(url + 'sign-up/', credentials)
            .then(response => response.data);
    },
    update(credentials) {
        return axios
            .put(url + 'usersetting/update', credentials)
            .then(response => response.data);
    },
    updatePassword(credentials) {
        return axios
            .put(url + 'usersetting/updatePassword', credentials)
            .then(response => response.data);
    },
    getBranch() {
        return axios.get(url + "branch").then(response => this.types = response.data.branchs);
    },
    upload(credentials) {
        return axios
            .post(url + 'upload/create', credentials)
            .then(response => response.data);
    },
};