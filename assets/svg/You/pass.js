import * as React from "react"
import Svg, { Path } from "react-native-svg"

function pass(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.25 7.063h-1.328V2.688a2.5 2.5 0 00-2.5-2.5H4.578a2.5 2.5 0 00-2.5 2.5v4.374H.75a.624.624 0 00-.625.625v7.5c0 .346.28.626.625.626h12.5c.346 0 .625-.28.625-.626v-7.5a.624.624 0 00-.625-.625zM7.547 11.69v1.036c0 .085-.07.156-.156.156h-.782a.157.157 0 01-.156-.156V11.69a.938.938 0 111.094 0zm2.969-4.629H3.484V2.688c0-.603.49-1.093 1.094-1.093h4.844c.603 0 1.094.49 1.094 1.093v4.376z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default pass