
import { call, takeEvery, put } from 'redux-saga/effects';
import { getAllStatusOrderFailed, getAllStatusOrderSuccess, getOrderError, getOrderSuccess } from '../actions/orderAction';
import orderApi from '../api/orderApi';
import { GET_ALL_STATUS_ORDER, GET_ORDER } from '../actions/actionTypes';

function* getOrDer(action) {
    const {itemCode } = action.payload;
    console.log("start")
    try {
        const response = yield orderApi.getOrder(itemCode)
        console.log("success",response)
        yield put(getOrderSuccess(response.data));
    } catch (error) {
        console.log(1, error);
        yield put(getOrderError(error));
    }
}

export function* watchGetOrder() {
    yield takeEvery(GET_ORDER, getOrDer);
}
function* getOrDerStatus() {
    console.log("start")
    try {
        const response = yield orderApi.getOrderStatus()
        const res = response.data.map((item) => {
            return item.name
        }
        )

        yield put(getAllStatusOrderSuccess(res));
    } catch (error) {
        console.log(1, error);
        yield put(getAllStatusOrderFailed(error));
    }
}

export function* watchGetOrderStatus() {
    yield takeEvery(GET_ALL_STATUS_ORDER, getOrDerStatus);
}
