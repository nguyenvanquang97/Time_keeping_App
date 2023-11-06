import { GET_ALL_STATUS_ORDER, GET_ALL_STATUS_ORDER_FAILED, GET_ALL_STATUS_ORDER_SUCCESS, GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS, } from "../actions/actionTypes";
const initialState = {
    orders: [""],
    loading: false,
    error: "",
    orderStatus: []
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return { loading: true }
        case GET_ORDER_SUCCESS:
            return { ...state, orders: action.payload, loading: false }

        case GET_ORDER_ERROR:
            return { ...state, error: action.payload, loading: false }
        case GET_ALL_STATUS_ORDER:
            return {loading:true}
        case GET_ALL_STATUS_ORDER_SUCCESS:
            return { ...state, orderStatus: action.payload, loading: false }
        case GET_ALL_STATUS_ORDER_FAILED:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

export default orderReducer;