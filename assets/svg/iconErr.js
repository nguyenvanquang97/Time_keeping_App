import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconErr(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11 .5C5.202.5.5 5.202.5 11S5.202 21.5 11 21.5 21.5 16.798 21.5 11 16.798.5 11 .5zm3.877 14.49l-1.547-.008L11 12.205 8.673 14.98l-1.55.007a.187.187 0 01-.187-.188c0-.044.016-.086.044-.122l3.05-3.633-3.05-3.63a.188.188 0 01.143-.31l1.55.008L11 9.889l2.327-2.775 1.547-.007c.103 0 .188.082.188.188a.195.195 0 01-.045.121l-3.044 3.63 3.046 3.634a.188.188 0 01-.143.31z"
                fill="#fff"
            />
        </Svg>
    )
}

export default iconErr
