import * as React from "react"
import Svg, { Path } from "react-native-svg"

function cancle(props) {
    return (
        <Svg
            width={8}
            height={16}
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 1.801V.169c0-.141-.13-.22-.217-.133L.207 7.47a.666.666 0 00-.153.235.818.818 0 000 .592.666.666 0 00.153.235l7.576 7.433c.09.086.217.008.217-.133v-1.632a.38.38 0 00-.103-.266l-6.05-5.932 6.05-5.934A.38.38 0 008 1.801z"
                fill="#262626"
            />
        </Svg>
    )
}

export default cancle
