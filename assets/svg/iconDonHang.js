import * as React from "react"
import Svg, { Path } from "react-native-svg"

function iconDonHang(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.567 4.14h5.347L12.956.807c-.14-.07-.348-.139-.486-.139h-2.223l1.32 3.472zM11.775 5.53v4.86H6.22V5.53H.664v11.11c0 .417.278.695.695.695h15.277c.417 0 .695-.278.695-.695V5.53h-5.556zM6.428 4.14L7.748.668H5.524c-.139 0-.347.07-.416.139L1.08 4.14h5.347z"
                fill="#FBAF17"
            />
        </Svg>
    )
}

export default iconDonHang
