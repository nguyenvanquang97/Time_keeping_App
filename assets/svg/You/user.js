import * as React from "react"
import Svg, { Path } from "react-native-svg"

function user(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9.306 10.404c-.691.423-1.469.679-2.307.679-.839 0-1.616-.256-2.308-.679-2.43.166-4.359 2.273-4.359 4.845v1.202l.463.155c.09.029 2.229.727 6.204.727 3.974 0 6.114-.698 6.203-.727l.463-.155v-1.202c0-2.572-1.929-4.679-4.359-4.845zM6.999 9.694c2.252 0 4-2.613 4-4.861 0-2.298-1.794-4.167-4-4.167s-4 1.869-4 4.167c0 2.248 1.747 4.86 4 4.86z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default user
