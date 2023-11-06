import * as React from "react"
import Svg, { Path } from "react-native-svg"

function eye_slash(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.357 6.014a12.742 12.742 0 00-1.384-1.638L9.739 6.61c.022.126.034.254.038.382A2.777 2.777 0 017 9.769a2.793 2.793 0 01-.382-.038l-1.81 1.809A5.712 5.712 0 007 11.991c3.17 0 5.502-2.812 6.357-4.021a1.698 1.698 0 000-1.956zM7 1.993c-3.17 0-5.499 2.812-6.357 4.021a1.699 1.699 0 000 1.956A11.816 11.816 0 003.3 10.69l1.735-1.735a2.778 2.778 0 013.928-3.928L5.035 8.956l5.667-5.666A6.379 6.379 0 007 1.993z"
                fill="#000"
                fillOpacity={0.6}
                style={{
                    mixBlendMode: "multiply"
                }}
            />
            <Path
                d="M.89 13.657a.556.556 0 01-.393-.948L12.717.49a.556.556 0 01.786.786l-12.22 12.22a.556.556 0 01-.393.162z"
                fill="#000"
                fillOpacity={0.6}
                style={{
                    mixBlendMode: "multiply"
                }}
            />
        </Svg>
    )
}

export default eye_slash
