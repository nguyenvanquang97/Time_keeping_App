import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconAdd(props) {
    return (
        <Svg
            width={24}
            height={40}
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#fff" d="M0 0H24V40H0z" />
            <Path
                d="M11.215 11h1.57c.14 0 .21.067.21.2v17.6c0 .133-.07.2-.21.2h-1.57c-.14 0-.21-.067-.21-.2V11.2c0-.133.07-.2.21-.2z"
                fill="#262626"
            />
            <Path
                d="M3.21 19.05h17.58c.14 0 .21.067.21.2v1.5c0 .133-.07.2-.21.2H3.21c-.14 0-.21-.067-.21-.2v-1.5c0-.133.07-.2.21-.2z"
                fill="#262626"
            />
        </Svg>
    )
}

export default iconAdd
