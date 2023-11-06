import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function iconDelete(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={24} height={24} rx={12} fill="#FFF3F3" />
      <Path
        d="M17.156 8.25h-1.875V7.078a.938.938 0 00-.937-.937H9.656a.938.938 0 00-.937.937V8.25H6.844c-.26 0-.469.21-.469.469v.469c0 .064.053.117.117.117h.885l.362 7.66c.023.5.436.894.936.894h6.65a.936.936 0 00.936-.893l.362-7.661h.885a.118.118 0 00.117-.117v-.47c0-.259-.21-.468-.469-.468zm-2.93 0H9.774V7.195h4.454V8.25z"
        fill="#E60000"
      />
    </Svg>
  )
}

export default iconDelete