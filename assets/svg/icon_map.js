import * as React from "react"
import Svg, { Path } from "react-native-svg"

function map(props) {
  return (
    <Svg
      width={12}
      height={14}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.997.332C3.39.332.664 2.303.664 5.549c0 3.073 4.74 7.769 4.919 7.942a.544.544 0 00.414.174.544.544 0 00.415-.173c.178-.175 4.919-4.87 4.919-7.943 0-3.246-2.726-5.217-5.334-5.217zm0 6.957c-1.007 0-1.777-.754-1.777-1.74 0-.985.77-1.739 1.777-1.739 1.008 0 1.778.754 1.778 1.74 0 .985-.77 1.739-1.778 1.739z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default map
