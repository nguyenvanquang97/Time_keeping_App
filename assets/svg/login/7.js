import * as React from "react"
import Svg, { Path } from "react-native-svg"

function seven(props) {
    return (
        <Svg
            width={18}
            height={22}
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.497.582H3.164c-1.378 0-2.5 1.168-2.5 2.604v15.191c0 1.675 1.308 3.038 2.917 3.038h12.916c.461 0 .834-.389.834-.868V1.45c0-.48-.373-.868-.834-.868zM8.164 2.318h5v7.813l-2.5-1.736-2.5 1.736V2.318zm7.5 17.361H3.581c-.69 0-1.25-.584-1.25-1.302 0-.718.56-1.302 1.25-1.302h12.083v2.604z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default seven
