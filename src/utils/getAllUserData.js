import axios from "axios";
import UserDataFormat from "./Data_Format";

const HTTP_HOST = "http://localhost:3000";

const getAllUserData = async (userID) => {
    let endpoints = [
        axios.get(`${HTTP_HOST}/user/${userID}`).then(res => res.data),
        axios.get(`${HTTP_HOST}/user/${userID}/activity`).then(res => res.data),
        axios.get(`${HTTP_HOST}/user/${userID}/average-sessions`).then(res => res.data),
        axios.get(`${HTTP_HOST}/user/${userID}/performance `).then(res => res.data)
    ];

    return await Promise.all(endpoints).then((res) => {
        return new UserDataFormat({
            user_main_data: res[0].data,
            user_activity: res[1].data,
            user_average_sessions: res[2].data,
            user_performance: res[3].data
        });
    });
}

export default getAllUserData;