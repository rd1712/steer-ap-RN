import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function ProgressIndicator(props) {
  const progressNumber = props.progressNumber
  return (
    <Svg
      width={72}
      height={8}
      viewBox="0 0 72 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={4} cy={4} r={4} fill={progressNumber > 0 ? "#004475" : "#fff"} />
      <Circle cx={20} cy={4} r={4} fill={progressNumber > 1 ? "#004475" : "#fff"} />
      <Circle cx={36} cy={4} r={4} fill={progressNumber > 2 ? "#004475" : "#fff"} />
      <Circle cx={52} cy={4} r={4} fill={progressNumber > 3 ? "#004475" : "#fff"} />
      <Circle cx={68} cy={4} r={4} fill={progressNumber > 4 ? "#004475" : "#fff"} />
    </Svg>
  )
}

export default ProgressIndicator
