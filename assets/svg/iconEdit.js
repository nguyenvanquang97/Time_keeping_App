import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function iconEdit(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={24} height={24} rx={12} fill="#E6F7FF" />
            <Path
                d="M17.39 16.746H6.61c-.26 0-.47.21-.47.469v.527c0 .065.053.117.118.117h11.484a.118.118 0 00.117-.117v-.527c0-.26-.21-.469-.468-.469zm-9.115-1.23c.03 0 .059-.003.088-.008l2.464-.432a.144.144 0 00.077-.04l6.21-6.21a.148.148 0 00.043-.104.147.147 0 00-.043-.103l-2.435-2.436a.145.145 0 00-.104-.042.145.145 0 00-.104.042l-6.21 6.21a.149.149 0 00-.04.077l-.432 2.464a.49.49 0 00.137.437.496.496 0 00.349.145z"
                fill="#1890FF"
            />
        </Svg>
    )
}

export default iconEdit
