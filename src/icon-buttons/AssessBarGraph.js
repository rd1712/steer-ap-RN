import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function AssessBarGraph(props) {
    return (
        <Svg
            width={24}
            height={39}
            viewBox="0 0 24 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                y={16.4056}
                width={4.47426}
                height={21.6256}
                rx={2.23713}
                fill={props.assessNumber > 0 ? "#004475" : "#C4C4C4"}
            />
            <Rect
                x={9.69434}
                y={8.94855}
                width={4.47426}
                height={29.0827}
                rx={2.23713}
                fill={props.assessNumber > 1 ? "#004475" : "#C4C4C4"}
            />
            <Rect
                x={19.3887}
                width={4.47426}
                height={38.0312}
                rx={2.23713}
                fill={props.assessNumber > 2 ? "#004475" : "#C4C4C4"}
            />
        </Svg>
    )
}

export default AssessBarGraph
