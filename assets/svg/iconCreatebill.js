import * as React from "react"
import Svg, {
    Path,
    Mask,
    G,
    Ellipse,
    Defs,
    LinearGradient,
    Stop
} from "react-native-svg"

function iconCreatebill(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M21.114 4.805c-2.984 0-5.41 2.372-5.41 5.288v30.41h9.47c5.412 0 5.412 0 5.412-5.289v-25.12c0-5.29 0-5.29-5.411-5.29h-4.06z"
                fill="#E79C07"
            />
            <Path
                d="M10.307 4.805c2.985 0 5.412 2.372 5.412 5.288v30.41H6.247c-5.411 0-5.411 0-5.411-5.289v-25.12c0-5.29 0-5.29 5.411-5.29h4.06z"
                fill="#FFC043"
            />
            <Path
                fill="#E79C07"
                d="M15.7109 7.45312H27.886400000000002V37.86262H15.7109z"
            />
            <Path d="M8.914 15.96h6.764v2.645H8.914v-2.644z" fill="#FFEAC2" />
            <Path d="M15.672 15.96h6.764v2.645h-6.764v-2.644z" fill="#FFC043" />
            <Path d="M8.914 22.383h6.764v2.644H8.914v-2.644z" fill="#FFEAC2" />
            <Path d="M15.672 22.383h6.764v2.644h-6.764v-2.644z" fill="#FFC043" />
            <Path d="M8.914 28.797h6.764v2.644H8.914v-2.644z" fill="#FFEAC2" />
            <Path d="M15.672 28.797h6.764v2.644h-6.764v-2.644z" fill="#FFC043" />
            <Path
                d="M19.068.836h-6.764c-1.866 0-3.382 1.482-3.382 3.305v3.967c0 1.823 1.516 3.305 3.382 3.305h6.764c1.865 0 3.382-1.482 3.382-3.305V4.14c0-1.823-1.517-3.305-3.382-3.305z"
                fill="#FFEAC2"
            />
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={8}
                y={0}
                width={15}
                height={12}
            >
                <Path
                    d="M19.06.836h-6.764c-1.865 0-3.382 1.482-3.382 3.305v3.967c0 1.823 1.517 3.305 3.382 3.305h6.764c1.866 0 3.382-1.482 3.382-3.305V4.14c0-1.823-1.516-3.305-3.382-3.305z"
                    fill="url(#paint0_linear_7870_50145)"
                />
            </Mask>
            <G mask="url(#a)">
                <Path
                    fill="#FFC043"
                    d="M15.6719 0.835938H22.436040000000002V11.446238000000001H15.6719z"
                />
            </G>
            <Ellipse
                cx={32.3389}
                cy={31.956}
                rx={14.2217}
                ry={14.2217}
                fill="#FFEAC2"
            />
            <Path
                d="M32.342 22.621c-4.117 0-7.467 3.35-7.467 7.467 0 6.015 5.009 11.2 7.467 11.2 2.523 0 7.466-5.07 7.466-11.2 0-4.117-3.35-7.467-7.466-7.467z"
                fill="#FFC043"
            />
            <Path
                d="M32.32 26.355a3.737 3.737 0 00-3.734 3.734 3.737 3.737 0 003.733 3.733 3.737 3.737 0 003.734-3.733 3.737 3.737 0 00-3.734-3.733z"
                fill="#E79C07"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_7870_50145"
                    x1={8.91406}
                    y1={6.12456}
                    x2={22.4423}
                    y2={6.12456}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#42A5F5" />
                    <Stop offset={1} stopColor="#1E88E5" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default iconCreatebill
