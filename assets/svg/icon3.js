import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function icon3(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={32} height={32} rx={16} fill="#E6F7FF" />
            <Path
                d="M12.648 18.96l2.125-.257c.068.542.25.956.547 1.242.297.287.657.43 1.078.43a1.47 1.47 0 001.141-.516c.313-.343.469-.807.469-1.39 0-.552-.149-.99-.445-1.313a1.42 1.42 0 00-1.086-.484c-.282 0-.618.055-1.008.164l.242-1.79c.594.017 1.047-.111 1.36-.382.312-.276.468-.64.468-1.094 0-.385-.115-.692-.344-.922-.229-.229-.534-.343-.914-.343-.375 0-.695.13-.96.39-.266.26-.428.64-.485 1.14l-2.024-.343c.141-.693.352-1.245.633-1.656a2.868 2.868 0 011.188-.977c.51-.24 1.08-.359 1.71-.359 1.079 0 1.944.344 2.595 1.031.536.563.804 1.198.804 1.906 0 1.006-.55 1.808-1.648 2.407.656.14 1.18.455 1.57.945.396.49.594 1.08.594 1.773 0 1.006-.367 1.862-1.102 2.57-.734.71-1.648 1.063-2.742 1.063-1.036 0-1.896-.297-2.578-.89-.682-.6-1.078-1.38-1.188-2.344z"
                fill="#1890FF"
            />
        </Svg>
    )
}

export default icon3
