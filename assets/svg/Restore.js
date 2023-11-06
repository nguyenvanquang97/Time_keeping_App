import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Restore(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={24} height={24} rx={12} fill="#F4F9EC" />
            <Path
                d="M11.836 5.627h0c3.457-.085 6.437 2.732 6.536 6.19h0A6.376 6.376 0 0112 18.375 6.368 6.368 0 015.83 13.58c-.132-.513.273-1.01.802-1.01.36 0 .688.245.787.59v.004h0a4.733 4.733 0 005.447 3.49h0c1.873-.33 3.408-1.826 3.773-3.698h0A4.744 4.744 0 0012 7.266c-1.433 0-2.714.652-3.587 1.666l.995 1.001a.469.469 0 01-.331.804H6.097a.469.469 0 01-.472-.472V7.287v0h.125a.347.347 0 01.59-.25l5.496-1.41zm0 0A6.334 6.334 0 007.25 7.763l4.586-2.136z"
                fill="#8DC63F"
                stroke="#8DC63F"
                strokeWidth={0.25}
            />
        </Svg>
    )
}

export default Restore
