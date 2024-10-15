import { apiClient } from "./config";



export const apiGetParkingSlots = async () => apiClient.get("/products")

export const apiAddParkingSlot = async (payload: never) => 
    apiClient.post("/products", payload)

export const apiGetSingleParkingSlot = async (slug: never) => 
    apiClient.get(`/products/${slug}`)