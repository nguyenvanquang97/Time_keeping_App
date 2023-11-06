import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function icon4(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={32} height={32} rx={16} fill="#E6F7FF" />
            <Path
                d="M17.031 22v-2.305h-4.687v-1.922l4.969-7.273h1.843v7.266h1.422v1.93h-1.422V22h-2.125zm0-4.234v-3.914l-2.633 3.914h2.633z"
                fill="#1890FF"
            />
        </Svg>
    )
}

export default icon4
