import * as React from "react"
import Svg, { Path } from "react-native-svg"

function advancedSearch(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.833 2.5H20v1.667h-9.167V2.5zM0 2.5h4.167v1.667H0V2.5zM17.5 9.167H20v1.666h-2.5V9.167zM0 9.167h10.833v1.666H0V9.167zM10.833 15.833H20V17.5h-9.167v-1.667zM0 15.833h4.167V17.5H0v-1.667z"
        fill="#262626"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.833 1.667a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zM2.5 3.333a3.333 3.333 0 116.667 0 3.333 3.333 0 01-6.667 0zM12.5 8.333a1.667 1.667 0 100 3.334 1.667 1.667 0 000-3.334zM9.167 10a3.333 3.333 0 116.666 0 3.333 3.333 0 01-6.666 0zM5.833 15a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zM2.5 16.667a3.333 3.333 0 116.667 0 3.333 3.333 0 01-6.667 0z"
        fill="#262626"
      />
    </Svg>
  )
}

export default advancedSearch
