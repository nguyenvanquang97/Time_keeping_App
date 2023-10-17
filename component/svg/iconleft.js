import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function iconleft(props) {
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
                d="M11.274 20.681c0 .477.373.866.832.866h.951v2.454c0 .622.48 1.13 1.067 1.13.59 0 1.067-.506 1.067-1.13v-2.456h1.66V24c0 .622.479 1.129 1.067 1.129.59 0 1.067-.505 1.067-1.129v-2.454h.95c.46 0 .833-.389.833-.866v-8.054h-9.494v8.056zm6.976-12.23l.877-1.324c.05-.078.04-.182-.03-.233-.068-.048-.165-.024-.216.053l-.91 1.378A5.177 5.177 0 0016 7.942c-.7 0-1.369.136-1.969.383l-.91-1.376c-.05-.077-.149-.103-.217-.053-.068.05-.08.151-.03.233l.878 1.324c-1.395.677-2.372 1.959-2.497 3.457h9.494c-.128-1.5-1.107-2.782-2.5-3.459zm-4.253 2.09a.51.51 0 01-.292-.093.543.543 0 01-.193-.246.57.57 0 01.114-.598.506.506 0 01.573-.119.53.53 0 01.235.203.566.566 0 01-.066.691.516.516 0 01-.37.161zm4.071 0a.51.51 0 01-.292-.093.544.544 0 01-.193-.246.57.57 0 01.114-.598.505.505 0 01.573-.119.53.53 0 01.235.203.566.566 0 01-.066.691.516.516 0 01-.37.161zm4.364 2.051c-.59 0-1.066.506-1.066 1.13v4.41c0 .621.478 1.129 1.066 1.129.59 0 1.067-.506 1.067-1.13V13.72c.002-.623-.475-1.127-1.067-1.127zm-12.865 0c-.59 0-1.067.506-1.067 1.13v4.41c0 .621.479 1.129 1.067 1.129.59 0 1.066-.506 1.066-1.13V13.72c0-.623-.478-1.127-1.066-1.127z"
                fill="#1890FF"
            />
        </Svg>
    )
}

export default iconleft
