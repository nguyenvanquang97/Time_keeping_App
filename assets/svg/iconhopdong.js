import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function iconhopdong(props) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={40} height={40} rx={20} fill="#FFFAF0" />
            <Path
                d="M28.364 14.548a.78.78 0 01.23.552v15.056a.78.78 0 01-.782.782H12.188a.78.78 0 01-.78-.782V9.844a.78.78 0 01.78-.781h10.37c.207 0 .407.083.553.229l5.254 5.256zm-1.572.911l-4.595-4.595v4.595h4.595zm-11.48 3.809a.195.195 0 00-.195.195v1.172a.196.196 0 00.195.195h9.376a.195.195 0 00.195-.195v-1.172a.195.195 0 00-.195-.195h-9.375zm0 3.32a.195.195 0 00-.195.195v1.172a.195.195 0 00.195.195h4.493a.195.195 0 00.195-.195v-1.172a.195.195 0 00-.195-.195h-4.492z"
                fill="#FBAF17"
            />
        </Svg>
    )
}

export default iconhopdong
