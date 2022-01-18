import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const SocialButton = () => {
  return (
    <TouchableOpacity style={styles.socialButton} onPress={() => {}}>
      <LinearGradient
        style={styles.linearGradient}
        start={[0, 0]}
        end={[0.5, 1]}
        colors={["#97C8EB", "#FDFDFD"]}
        locations={[0.5, 1]}
      >
        <View style={styles.innerView}>
          <GoogleIcon />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const GoogleIcon = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M23.767 9.65H22.8V9.6H12v4.8h6.782c-.99 2.794-3.648 4.8-6.782 4.8a7.2 7.2 0 010-14.4c1.835 0 3.505.692 4.777 1.823L20.17 3.23A11.945 11.945 0 0012 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12c0-.805-.083-1.59-.233-2.35z"
      fill="#FFC107"
    />
    <Path
      d="M1.384 6.415l3.942 2.891A7.197 7.197 0 0112 4.8c1.835 0 3.505.692 4.777 1.823L20.17 3.23A11.944 11.944 0 0012 0C7.39 0 3.393 2.602 1.383 6.415z"
      fill="#FF3D00"
    />
    <Path
      d="M12 24c3.1 0 5.916-1.186 8.045-3.115l-3.714-3.143A7.146 7.146 0 0112 19.2c-3.121 0-5.771-1.99-6.77-4.768l-3.913 3.015C3.303 21.334 7.337 24 12 24z"
      fill="#4CAF50"
    />
    <Path
      d="M23.767 9.65H22.8V9.6H12v4.8h6.782a7.225 7.225 0 01-2.452 3.343l.001-.002 3.714 3.143C19.783 21.124 24 18 24 12c0-.805-.083-1.59-.233-2.35z"
      fill="#40AFFF"
    />
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  socialButton: {
    width: 80,
    height: 54,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  innerView: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#FDFDFD",
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SocialButton;
