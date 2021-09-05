import axios from "axios"
import { AUTH_URL, PASSWORK, USERNAME } from "./types"

export const getAccessToken = async () => {
    try {
        const response = await axios({
            url: AUTH_URL,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data:   {
                username: USERNAME,
                password: PASSWORK
            }
        })
    
        if(response.status === 200) {
            return response.data
        }
        return null
    } catch(err) {
        return
    }
}