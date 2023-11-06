import { all } from 'redux-saga/effects';
import { watchGetOrder, watchGetOrderStatus } from './orderSaga';
import { watchLogin } from './accountSaga';


export default function* rootSaga() {
    yield all([
        watchGetOrder(),
        watchLogin(),
        watchGetOrderStatus(),
    ]);
}
