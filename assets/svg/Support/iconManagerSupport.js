import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconManagerSupport(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.98 10.999L8.998 9.082l-2.983 1.917.9-3.434-2.742-2.233 3.542-.217 1.283-3.283 1.284 3.283 3.541.217-2.741 2.233.9 3.434zm3.684-4a1.667 1.667 0 011.667-1.667V1.999A1.667 1.667 0 0015.664.332H2.331A1.667 1.667 0 00.664 1.999v3.333a1.667 1.667 0 010 3.333V12a1.667 1.667 0 001.667 1.666h13.333A1.667 1.667 0 0017.331 12V8.665A1.667 1.667 0 0115.664 7z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default iconManagerSupport
