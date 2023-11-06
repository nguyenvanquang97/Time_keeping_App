import * as React from "react"
import Svg, { Path } from "react-native-svg"

function receiver(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.07 9.21c-1.965 0-3.559-2.306-3.559-4.271v-.712a3.56 3.56 0 017.119 0v.712c0 1.965-1.594 4.27-3.56 4.27zM9.206 14.905c0-1.5.665-2.84 1.713-3.754a15.282 15.282 0 00-3.849-.518c-2.01 0-3.793.455-4.964.85a2.129 2.129 0 00-1.442 2.02v2.825h8.751a4.975 4.975 0 01-.209-1.423zM12.765 17.335l-2.43-2.43 1.006-1.007 1.424 1.424 3.56-3.56 1.006 1.007-4.566 4.566z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default receiver
