import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function iconThuGom(props) {
    return (
        <Svg
            width={37}
            height={40}
            viewBox="0 0 37 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.549 11.31a1.173 1.173 0 001.902 0l3.616-4.687c.257-.357.293-.827.093-1.22a1.174 1.174 0 00-1.044-.637h-1.272V1.172C20.844.524 20.32 0 19.672 0h-2.344c-.648 0-1.172.524-1.172 1.172v3.594h-1.272c-.44 0-.843.246-1.044.637-.2.393-.164.863.093 1.22l3.616 4.687zM5.609 20v18.828c0 .648.525 1.172 1.172 1.172H30.22c.647 0 1.172-.524 1.172-1.172V20H5.609z"
                fill="url(#paint0_linear_7870_28289)"
            />
            <Path
                d="M35.735 19.172l-4.688-4.688a1.17 1.17 0 00-.828-.343H6.781a1.17 1.17 0 00-.828.343l-4.688 4.688a1.17 1.17 0 00.829 2h32.813a1.17 1.17 0 00.828-2zM13.813 32.969h-2.344a1.171 1.171 0 100 2.343h2.344a1.171 1.171 0 100-2.343z"
                fill="#A9D5FF"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_7870_28289"
                    x1={18.5}
                    y1={0}
                    x2={18.5}
                    y2={40}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#619EDA" />
                    <Stop offset={0.284375} stopColor="#619EDA" />
                    <Stop offset={1} stopColor="#0064C5" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default iconThuGom
