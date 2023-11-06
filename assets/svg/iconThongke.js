import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function iconThongke(props) {
    return (
        <Svg
            width={35}
            height={34}
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.598 0C5.536 0 .508 4.97.508 11.023c0 6.079 5.057 10.957 11.09 10.957 5.835 0 10.62-4.585 10.94-10.342L11.597 0zm5.976 23.973H13.59a.996.996 0 00-.996.996v8.035c0 .55.446.996.996.996h3.984c.55 0 .996-.446.996-.996v-8.035a.996.996 0 00-.996-.996zm7.969-5.977h-3.984a.996.996 0 00-.997.996v14.012c0 .55.447.996.997.996h3.984c.55 0 .996-.446.996-.996V18.992a.996.996 0 00-.996-.996zm7.969-5.976h-3.985a.996.996 0 00-.996.996v19.988c0 .55.446.996.996.996h3.985c.55 0 .996-.446.996-.996V13.016a.996.996 0 00-.996-.996zM9.605 28.023H5.621a.996.996 0 00-.996.997v3.984c0 .55.446.996.996.996h3.984c.55 0 .997-.446.997-.996V29.02a.996.996 0 00-.997-.997z"
                fill="url(#paint0_linear_7870_9980)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_7870_9980"
                    x1={17.5078}
                    y1={0}
                    x2={17.5078}
                    y2={34}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#AFD779" />
                    <Stop offset={1} stopColor="#8DC63F" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default iconThongke
