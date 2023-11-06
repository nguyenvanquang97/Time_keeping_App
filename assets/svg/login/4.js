import * as React from "react"
import Svg, { Path } from "react-native-svg"

function bon(props) {
  return (
    <Svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.664.582H6.497a2.429 2.429 0 00-1.437.482c-.42.312-.738.751-.91 1.258h9.847c.442 0 .866.184 1.179.51.313.326.488.769.488 1.23v12.63l1.667 1.243V2.322a1.78 1.78 0 00-.488-1.23 1.632 1.632 0 00-1.179-.51z"
        fill="#BFBFBF"
      />
      <Path
        d="M12.33 4.063h-10c-.441 0-.865.183-1.178.51a1.78 1.78 0 00-.488 1.23v15.612l6.667-4.971 6.666 4.971V5.803a1.78 1.78 0 00-.488-1.23 1.632 1.632 0 00-1.178-.51z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default bon
