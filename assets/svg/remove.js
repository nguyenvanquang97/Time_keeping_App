import * as React from "react"
import Svg, { Path } from "react-native-svg"

function remove(props) {
    return (
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.438 2.313H5.25a.188.188 0 00.188-.188v.188h7.125v-.188c0 .103.084.188.187.188h-.188V4h1.688V2.125c0-.827-.673-1.5-1.5-1.5h-7.5c-.827 0-1.5.673-1.5 1.5V4h1.688V2.312zM17.25 4H.75a.75.75 0 00-.75.75v.75c0 .103.084.188.188.188h1.415l.579 12.257c.038.8.698 1.43 1.498 1.43h10.64c.802 0 1.46-.628 1.498-1.43l.579-12.258h1.416A.188.188 0 0018 5.5v-.75a.75.75 0 00-.75-.75zm-3.11 13.688H3.86l-.567-12h11.414l-.567 12z"
                fill="#262626"
            />
        </Svg>
    )
}

export default remove
