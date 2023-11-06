import * as React from "react"
import Svg, { Path } from "react-native-svg"

function userBank(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.46 7.022c.604 0 .856-.775.366-1.132L9.366.464a.621.621 0 00-.734 0L1.173 5.89c-.49.355-.238 1.132.367 1.132h1.21v7.305H1.342a.157.157 0 00-.156.156V15.5c0 .086.07.156.156.156h15.313c.085 0 .156-.07.156-.156v-1.016a.157.157 0 00-.156-.156h-1.407V7.022h1.211zM6.44 14.327H4.157V7.022H6.44v7.305zm3.692 0H7.847V7.022h2.285v7.305zm3.711 0h-2.305V7.022h2.305v7.305z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default userBank
