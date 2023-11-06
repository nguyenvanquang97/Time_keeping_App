import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconThuVien(props) {
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
                d="M13.003.668H2.336c-1.103 0-2 .935-2 2.083v12.153c0 1.34 1.047 2.43 2.333 2.43h10.334a.68.68 0 00.666-.694V1.362a.68.68 0 00-.666-.694zM6.336 2.057h4v6.25l-2-1.389-2 1.389v-6.25zm6 13.889H2.669c-.551 0-1-.468-1-1.042 0-.574.449-1.042 1-1.042h9.667v2.084z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default iconThuVien
