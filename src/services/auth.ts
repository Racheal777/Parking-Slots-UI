import { apiClient } from "./config"


export const apiSignup = async (payload: never) => {
    return apiClient.post("/users/signup", payload)
}


export const apiLogin = async (payload: never) => 
 apiClient.post("/users/login", payload)


export const apiVerifyOTP = async (payload: never) => 
    apiClient.post("/users/OTP", payload)



   
