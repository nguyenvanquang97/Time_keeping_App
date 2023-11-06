import * as React from "react"
import Svg, { Path } from "react-native-svg"

function thietLap(props) {
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
                d="M13.691 4.639a.624.624 0 01.184.441v12.045c0 .346-.28.625-.625.625H.75a.624.624 0 01-.625-.625V.875C.125.529.405.25.75.25h8.295c.166 0 .326.066.443.184l4.203 4.205zm-1.257.728L8.758 1.691v3.676h3.676zM3.25 8.414a.156.156 0 00-.156.156v.938a.156.156 0 00.156.156h7.5a.156.156 0 00.156-.156V8.57a.156.156 0 00-.156-.156h-7.5zm0 2.656a.156.156 0 00-.156.157v.937a.156.156 0 00.156.156h3.594A.156.156 0 007 12.164v-.937a.156.156 0 00-.156-.157H3.25z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default thietLap
