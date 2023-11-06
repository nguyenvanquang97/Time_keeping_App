import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconAdd(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7.346.5h1.308c.116 0 .174.056.174.167v14.666c0 .111-.058.167-.174.167H7.346c-.116 0-.174-.056-.174-.167V.667c0-.111.058-.167.174-.167z"
                fill="#004588"
            />
            <Path
                d="M.674 7.208h14.652c.116 0 .174.056.174.167v1.25c0 .111-.058.167-.174.167H.674C.558 8.792.5 8.736.5 8.625v-1.25c0-.111.058-.167.174-.167z"
                fill="#004588"
            />
        </Svg>
    )
}

export default iconAdd
