import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconSelected(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9 .25a8.75 8.75 0 10.001 17.501A8.75 8.75 0 009 .25zm3.78 5.893l-4.114 5.703a.621.621 0 01-1.01 0L5.221 8.47a.157.157 0 01.127-.248h.916c.199 0 .388.095.506.26l1.39 1.93 3.07-4.259a.625.625 0 01.506-.26h.916c.127 0 .202.145.127.249z"
                fill="#FBAF17"
            />
        </Svg>
    )
}

export default iconSelected
