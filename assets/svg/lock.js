import * as React from "react"
import Svg, { Path } from "react-native-svg"

function lock(props) {
    return (
        <Svg
            width={12}
            height={14}
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11 6.25H9.937v-3.5a2 2 0 00-2-2H4.063a2 2 0 00-2 2v3.5H1a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM6.437 9.953v.828a.125.125 0 01-.125.125h-.625a.125.125 0 01-.125-.125v-.828a.75.75 0 11.875 0zM8.813 6.25H3.189v-3.5c0-.483.392-.875.874-.875h3.875c.483 0 .875.392.875.875v3.5z"
                fill="#595959"
            />
        </Svg>
    )
}

export default lock
