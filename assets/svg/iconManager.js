import * as React from "react"
import Svg, {
    Path,
    Mask,
    G,
    Circle,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function iconManager(props) {
    return (
        <Svg
            width={60}
            height={60}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M43.554 18.225v26.877H9.336V18.225l.668-1.12h32.882l.668 1.12z"
                fill="#FFC043"
            />
            <Path
                d="M43.554 18.229v26.877H26.25V18.23l.668-1.12h15.967l.669 1.12z"
                fill="#E79C07"
            />
            <Path
                d="M43.554 18.228H9.336l5.334-8.896h23.55l5.334 8.896z"
                fill="#FFC043"
            />
            <Path
                d="M43.56 18.228H24.422l5.334-8.896h8.47l5.334 8.896z"
                fill="#E79C07"
            />
            <Path
                d="M30.825 9.332h-8.77l-1.836 8.892V31.71l6.221-2.075 6.222 2.075V18.224l-1.837-8.892z"
                fill="#FFEAC2"
            />
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={20}
                y={9}
                width={13}
                height={23}
            >
                <Path
                    d="M30.825 9.332h-8.77l-1.836 8.892V31.71l6.221-2.075 6.222 2.075V18.224l-1.837-8.892z"
                    fill="url(#paint0_linear_7870_50179)"
                />
            </Mask>
            <G mask="url(#a)">
                <Path fill="#FFC043" d="M26.2422 9.33203H32.66119V31.71043H26.2422z" />
            </G>
            <Circle cx={37.3389} cy={36.956} r={14.2217} fill="#FFEAC2" />
            <G clipPath="url(#clip0_7870_50179)">
                <Path
                    d="M39.281 30.602a4.79 4.79 0 00-4.785 4.785 4.79 4.79 0 004.785 4.785 4.79 4.79 0 004.785-4.785 4.79 4.79 0 00-4.785-4.785zm-4.398 8.507l-1.204 1.203a.478.478 0 10.677.677l1.204-1.204a.478.478 0 10-.677-.676z"
                    fill="#FFEAC2"
                />
                <Path
                    d="M39.285 29.168c-3.427 0-6.221 2.794-6.221 6.22 0 3.427 2.794 6.221 6.22 6.221 3.427 0 6.221-2.794 6.221-6.22 0-3.427-2.794-6.221-6.22-6.221zm0 10.527a4.313 4.313 0 01-4.307-4.306 4.313 4.313 0 014.306-4.307 4.313 4.313 0 014.307 4.307 4.313 4.313 0 01-4.306 4.306zm-5.602-.058a.478.478 0 00-.677 0l-3.694 3.694a.478.478 0 000 .677l1.353 1.353c.187.187.49.187.677 0l3.694-3.694a.478.478 0 000-.676l-1.354-1.354z"
                    fill="#FFC043"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_7870_50179"
                    x1={20.2187}
                    y1={20.5199}
                    x2={32.6618}
                    y2={20.5199}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#BBDEFB" />
                    <Stop offset={1} stopColor="#64B5F6" />
                </LinearGradient>
                <ClipPath id="clip0_7870_50179">
                    <Path
                        fill="#fff"
                        transform="translate(29.172 29.168)"
                        d="M0 0H16.3333V16.3333H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default iconManager
