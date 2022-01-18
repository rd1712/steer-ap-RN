import * as React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import Svg, {
    G,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Facebook(props) {
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28 27.067C28 33.033 32.333 37.994 38 39v-8.667h-3V27h3v-2.667c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V23H43.8c-1.467 0-1.8.733-1.8 1.667V27h3.2l-.533 3.333H42V39c5.667-1.006 10-5.966 10-11.933C52 20.43 46.6 15 40 15s-12 5.43-12 12.067z"
                    fill="#1D78EF"
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
                        x1={3.5}
                        y1={4.22096e-7}
                        x2={77}
                        y2={56.5}
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

export default Facebook
