import * as React from "react"
import { TouchableOpacity } from "react-native"
import Svg, {
    G,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Apple(props) {
    return (
        <TouchableOpacity>
            <Svg
                width={80}
                height={54}
                viewBox="0 0 80 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <G filter="url(#filter0_b)">
                    <Rect width={80} height={54} rx={8} fill="url(#paint0_linear)" />
                    <Rect
                        x={1}
                        y={1}
                        width={78}
                        height={52}
                        rx={7}
                        stroke="url(#paint1_linear)"
                        strokeWidth={2}
                    />
                </G>
                <Path
                    d="M47.056 27.683c-.012-1.967.89-3.45 2.71-4.543-1.018-1.442-2.559-2.235-4.59-2.388-1.923-.15-4.028 1.107-4.798 1.107-.814 0-2.676-1.055-4.141-1.055C33.213 20.85 30 23.186 30 27.94c0 1.405.26 2.855.78 4.35.694 1.967 3.198 6.787 5.81 6.71 1.366-.033 2.332-.959 4.11-.959 1.724 0 2.617.958 4.14.958 2.636-.037 4.9-4.419 5.56-6.392-3.534-1.647-3.344-4.823-3.344-4.924zm-3.068-8.798c1.48-1.736 1.346-3.317 1.302-3.885-1.308.075-2.82.88-3.68 1.87-.949 1.06-1.506 2.373-1.387 3.853 1.413.107 2.703-.612 3.765-1.838z"
                    fill="#000"
                />
                <Defs>
                    <LinearGradient
                        id="paint0_linear"
                        x1={40}
                        y1={0}
                        x2={40}
                        y2={54}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#fff" stopOpacity={0.4} />
                        <Stop offset={1} stopColor="#fff" stopOpacity={0.1} />
                    </LinearGradient>
                    <LinearGradient
                        id="paint1_linear"
                        x1={4}
                        y1={-4.34617e-7}
                        x2={76}
                        y2={54}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#97C8EB" />
                        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </LinearGradient>
                </Defs>
            </Svg>
        </TouchableOpacity>
    )
}

export default Apple
