import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "28ebf5d7-9ee5-4710-bdb6-bc1f0f21b056"
    }
})

export const usersApi = {
    getUsers (currentPage=1, pageSize=10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => { //вернули promise где будет сидеть только дата и нету config, etc, делегировали сложные данные в dal
                    return response.data;
                }
            )
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    },
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
