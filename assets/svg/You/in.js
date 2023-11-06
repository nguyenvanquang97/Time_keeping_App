import * as React from "react"
import Svg, { Path } from "react-native-svg"

function inDon(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.297.344a.157.157 0 00-.156-.156H4.859a.157.157 0 00-.156.156v2.89h8.594V.344zm2.344 4.14H2.359c-.863 0-1.562.7-1.562 1.563v6.406c0 .346.28.625.625.625h3.281v2.578c0 .086.07.156.156.156h8.282c.086 0 .156-.07.156-.156v-2.578h3.281c.346 0 .625-.28.625-.625V6.047c0-.863-.7-1.563-1.562-1.563zm-3.672 10H6.03v-5.39h5.938v5.39zm3.203-7.03c0 .085-.07.155-.156.155h-.782a.157.157 0 01-.156-.156v-.781c0-.086.07-.156.156-.156h.782c.086 0 .156.07.156.156v.781z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default inDon