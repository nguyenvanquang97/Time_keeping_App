import * as React from "react"
import Svg, { Path } from "react-native-svg"

function spinner(props) {
    return (
        <Svg
            width={14}
            height={8}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.64 7.17L7.456.84c-.224-.23-.684-.23-.907 0L.361 7.17a.082.082 0 00-.011.109c.011.016.03.03.051.04.022.01.048.016.074.016H1.79c.089 0 .173-.033.226-.086L7 2.149l4.984 5.1a.322.322 0 00.226.086h1.316c.114 0 .18-.097.114-.166z"
                fill="#8C8C8C"
            />
        </Svg>
    )
}

export default spinner
