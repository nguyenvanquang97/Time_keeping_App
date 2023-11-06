import * as React from "react"
import Svg, { Path } from "react-native-svg"

function option(props) {
    return (
        <Svg
            width={16}
            height={4}
            viewBox="0 0 16 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.125 1.977a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.625 0zm6.563 0a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.626 0zm6.562 0a1.313 1.313 0 102.625 0 1.313 1.313 0 00-2.625 0z"
                fill="#262626"
            />
        </Svg>
    )
}

export default option
