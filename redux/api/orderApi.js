import fetchClient from "./fetchClient";

const { USERDATA } = require("../../utils/UserData");

const orderApi = {
    getOrder(itemCode) {
        const url = 'v1/OrderHdr/searchAllByParam';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("cApiKey", "19001111");
        myHeaders.append("Authorization", USERDATA.token);
        return fetchClient(url, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                orderType: "1",
                isInternational: "0",
                typeDate: "CREATED",
                toDateFromDate: ["2023-09-19",
                    "2025-09-25"],
                searchValue: itemCode,
                lstStatus: [],
                orgCode: [],
                os: "ANDROID"
            })
        });
    },
    getOrderStatus() {
        const url = 'v1/orderStatus/findAllOrderStatus';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("cApiKey", "19001111");
        myHeaders.append("Authorization", USERDATA.token);
        return fetchClient(url, {
            method: 'GET',
            headers: myHeaders,
        });
    },
}
export default orderApi;