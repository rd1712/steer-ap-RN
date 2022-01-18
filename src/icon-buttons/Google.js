import * as React from "react"
import { TouchableOpacity } from "react-native"
import Svg, {
    G,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Google(props) {
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
                    d="M51.767 24.65H50.8v-.05H40v4.8h6.782c-.99 2.794-3.648 4.8-6.782 4.8a7.2 7.2 0 010-14.4c1.835 0 3.505.692 4.777 1.823l3.394-3.394A11.945 11.945 0 0040 15c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-.805-.083-1.59-.233-2.35z"
                    fill="#FFC107"
                />
                <Path
                    d="M29.384 21.415l3.942 2.891A7.197 7.197 0 0140 19.8c1.836 0 3.505.692 4.777 1.823l3.394-3.394A11.944 11.944 0 0040 15c-4.61 0-8.607 2.602-10.617 6.415z"
                    fill="#FF3D00"
                />
                <Path
                    d="M40 39c3.1 0 5.916-1.186 8.045-3.115l-3.714-3.143A7.146 7.146 0 0140 34.2c-3.121 0-5.771-1.99-6.77-4.768l-3.913 3.015C31.303 36.334 35.337 39 40 39z"
                    fill="#4CAF50"
                />
                <Path
                    d="M51.767 24.65H50.8v-.05H40v4.8h6.782a7.225 7.225 0 01-2.452 3.343l.001-.002 3.714 3.143C47.783 36.124 52 33 52 27c0-.805-.083-1.59-.233-2.35z"
                    fill="#40AFFF"
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
                        x1={2}
                        y1={0.00000362703}
                        x2={77}
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

export default Google
