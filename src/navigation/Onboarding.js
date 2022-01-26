import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import basicInfo from "../screens/onboarding/basicInfo";
import institutionName from "../screens/onboarding/institutionName";
import profession from "../screens/onboarding/profession";
import currentPreparation from "../screens/onboarding/currentPreparation";
import loadingScreen from "../screens/onboarding/loadingScreen";
import examsSelection from "../screens/onboarding/examsSelection";
import profileType from "../screens/onboarding/profileType";
import uploadDocument from "../screens/onboarding/uploadDocument";

const Onboarding = createNativeStackNavigator();

export default OnboardingScreen = () => (
  <Onboarding.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Onboarding.Screen name="basicInfo" component={basicInfo} />
    <Onboarding.Screen name="institutionName" component={institutionName} />
    <Onboarding.Screen name="profession" component={profession} />
    <Onboarding.Screen name="currentPreparation" component={currentPreparation} />
    <Onboarding.Screen name="loadingScreen" component={loadingScreen} />
    <Onboarding.Screen name="uploadDocument" component={uploadDocument} />
    <Onboarding.Screen name="examsSelection" component={examsSelection} />
    <Onboarding.Screen name="profileType" component={profileType} />
  </Onboarding.Navigator>
);
