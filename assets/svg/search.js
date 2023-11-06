import * as React from "react"
import Svg, { Path } from "react-native-svg"

function search(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.133 9.205l3.536 3.537-.923.923-3.537-3.536.924-.924z"
        fill="#BFBFBF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.214 1.638a4.572 4.572 0 100 9.144 4.572 4.572 0 000-9.144zM.336 6.21a5.878 5.878 0 1111.756 0 5.878 5.878 0 01-11.756 0z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default search
