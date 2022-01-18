import * as React from "react";
import { View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

function Tick(props) {
  if (props.ticker) {
    return (
      <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Circle cx={7} cy={7} r={7} fill="#004475" />
        <Path d="M9.5 5L5.719 9 4 7.182" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    );
  } else {
    return <></>;
  }
}

export default Tick;
