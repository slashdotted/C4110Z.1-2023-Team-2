import { Text, SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhoWeAre from "./WhoWeAre";

import Styles from "../assets/styles/Settings";

const Stack = createNativeStackNavigator();

export default function MenuSettings() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsMenu} />
      <Stack.Screen name="WhoWeAre" component={WhoWeAre} />
    </Stack.Navigator>
  );
}

function SettingsMenu({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <Text style={Styles.Text} onPress={() => navigation.navigate("WhoWeAre")}>
        Credits
      </Text>
    </SafeAreaView>
  );
}