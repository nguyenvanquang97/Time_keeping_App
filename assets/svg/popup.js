import * as React from "react"
import Svg, { Path } from "react-native-svg"

function popup(props) {
  return (
    <Svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.219.332h-1.053a.257.257 0 00-.18.069L5.997 4.48 2.01.4a.257.257 0 00-.18-.068H.776C.685.332.632.409.685.464l4.95 5.064c.179.183.547.183.725 0L11.309.464c.054-.055.001-.132-.09-.132z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default popup
