import * as React from "react"
import Svg, { Path } from "react-native-svg"

function arow(props) {
    return (
        <Svg
            width={6}
            height={12}
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.531 5.647L.481.692A.08.08 0 00.434.669a.074.074 0 00-.049.01.1.1 0 00-.037.042.134.134 0 00-.013.06v1.087c0 .07.026.135.068.178L4.438 6 .404 9.957a.248.248 0 00-.068.177v1.088c0 .094.086.146.144.088l5.051-4.954a.446.446 0 00.102-.157.547.547 0 000-.395.445.445 0 00-.102-.157z"
                fill="#595959"
            />
        </Svg>
    )
}

export default arow
