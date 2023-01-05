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
    }
}





// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
//     withCredentials: true
// })