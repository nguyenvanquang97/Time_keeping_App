import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function icon1(props) {
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
                d="M18.344 22h-2.196v-8.273a7.568 7.568 0 01-2.835 1.664v-1.993c.572-.187 1.195-.541 1.867-1.062.672-.526 1.133-1.138 1.383-1.836h1.78V22z"
                fill="#1890FF"
            />
        </Svg>
    )
}

export default icon1
