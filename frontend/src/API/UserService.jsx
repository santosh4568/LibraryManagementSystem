import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user';

export async function fetchUsers() {
    return axios.get(`${USER_API_BASE_URL}/getAll`);
}

export async function fetchUserByEmail(email) {
    return axios.post(`${USER_API_BASE_URL}/${email}`);
}

export async function fetchUserByRegdNo(regdNo) {
    return axios.get(`${USER_API_BASE_URL}/${regdNo}`);
}

export async function createUser(user) {
    return axios.post(`${USER_API_BASE_URL}/save`, user);
}

export async function updateUser(user) {
    return axios.put(`${USER_API_BASE_URL}/update`, user);
}

export async function deleteUser(sid) {
    return axios.delete(`${USER_API_BASE_URL}/delete/${sid}`);
}