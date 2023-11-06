import { GET_ALL_STATUS_ORDER, GET_ALL_STATUS_ORDER_FAILED, GET_ALL_STATUS_ORDER_SUCCESS, GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS } from "./actionTypes"

export const getOrderData = (itemCode) => {
    return {
        type: GET_ORDER,
        payload:{itemCode}
    }
}
export const getOrderSuccess = (data) => {
    return {
        type: GET_ORDER_SUCCESS,
        payload: data
    }
}
export const getOrderError = (data) => {
    return {
        type: GET_ORDER_ERROR,
        payload: data
    }
}
export const getAllStatusOrder = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER,
        payload: data
    }
}
export const getAllStatusOrderSuccess = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER_SUCCESS,
        payload: data
    }
}
export const getAllStatusOrderFailed = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER_FAILED,
        payload: data
    }
}