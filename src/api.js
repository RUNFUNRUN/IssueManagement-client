import axios from "axios";

const request = async (path, method, data) => {
    const response = await axios({
        method: method,
        url: `http://localhost:3001${path}`,
        params: data,
    });
    return response.data;
};

export const getLogin = async (userId, password) => {
    const data = {
        id: userId,
        password: password
    }
    return await request("/login", "GET", data);
};

export const createAccount = async (userId, password) => {
    const data = {
        id: userId,
        password: password
    }
    return await request("/create-account", "POST", data);
};
