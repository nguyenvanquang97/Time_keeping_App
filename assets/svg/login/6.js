import * as React from "react"
import Svg, { Path } from "react-native-svg"

function six(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 .063C4.96.063.062 4.96.062 11 .063 17.04 4.96 21.938 11 21.938c6.04 0 10.938-4.898 10.938-10.938C21.938 4.96 17.04.062 11 .062zm0 17.285a.976.976 0 110-1.953.976.976 0 010 1.953zm1.536-5.36a1.179 1.179 0 00-.755 1.095v.554a.196.196 0 01-.195.195h-1.172a.196.196 0 01-.195-.195v-.525c0-.564.163-1.12.486-1.585.315-.454.754-.8 1.272-.998.83-.32 1.367-1.016 1.367-1.775C13.344 7.677 12.29 6.8 11 6.8s-2.344.876-2.344 1.953v.185a.196.196 0 01-.195.196H7.289a.196.196 0 01-.195-.196v-.185c0-.96.42-1.856 1.181-2.522.733-.642 1.7-.994 2.725-.994 1.025 0 1.992.354 2.725.994.761.666 1.181 1.562 1.181 2.522 0 1.411-.93 2.68-2.37 3.235z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default six
