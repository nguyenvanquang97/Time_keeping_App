import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconCleadr(props) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.75 1.875h-2.625v-1A.125.125 0 0010 .75h-.875A.125.125 0 009 .875v1H5v-1A.125.125 0 004.875.75H4a.125.125 0 00-.125.125v1H1.25a.5.5 0 00-.5.5V12.75a.5.5 0 00.5.5h11.5a.5.5 0 00.5-.5V2.375a.5.5 0 00-.5-.5zm-.625 10.25H1.875V6.187h10.25v5.938zm-10.25-7V3h2v.75c0 .069.056.125.125.125h.875A.125.125 0 005 3.75V3h4v.75c0 .069.056.125.125.125H10a.125.125 0 00.125-.125V3h2v2.125H1.875z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default iconCleadr
