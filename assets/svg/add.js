import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function add(props) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={40} height={40} rx={20} fill="#FBAF17" />
            <Path
                d="M19.182 10.625h1.636c.145 0 .218.07.218.208v18.334c0 .139-.073.208-.218.208h-1.636c-.145 0-.218-.07-.218-.208V10.833c0-.139.073-.208.218-.208z"
                fill="#fff"
            />
            <Path
                d="M10.843 19.01h18.314c.145 0 .218.07.218.209v1.562c0 .14-.073.209-.218.209H10.843c-.145 0-.218-.07-.218-.209V19.22c0-.14.073-.209.218-.209z"
                fill="#fff"
            />
        </Svg>
    )
}

export default add
