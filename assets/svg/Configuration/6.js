import * as React from "react"
import Svg, { Path } from "react-native-svg"

function managerDate(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M.188 15.188c0 .345.279.624.625.624h14.374c.346 0 .626-.279.626-.624V6.983H.187v8.204zm15-13.594h-3.282V.344a.157.157 0 00-.156-.156h-1.094a.157.157 0 00-.156.156v1.25h-5V.344a.157.157 0 00-.156-.156H4.25a.157.157 0 00-.156.156v1.25H.812a.624.624 0 00-.625.625v3.437h15.626V2.22a.624.624 0 00-.626-.625z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default managerDate
