import { Text, SafeAreaView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhoWeAre from "./WhoWeAre";
import DevelopmentEnvironment from "./DevelopmentEnvironment";
import { Image } from "react-native";

import Styles from "../assets/styles/Settings";

const Stack = createNativeStackNavigator();

export default function MenuSettings() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Settings Menu" component={SettingsMenu} />
      <Stack.Screen name="WhoWeAre" component={WhoWeAre} />
      <Stack.Screen
        name="DevelopmentEnvironment"
        component={DevelopmentEnvironment}
      />
    </Stack.Navigator>
  );
}

function SettingsMenu({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <Image
        source={require("../assets/gear.png")}
        style={{ width: 50, height: 50 }}
      />
      <Text style={Styles.Text} onPress={() => navigation.navigate("WhoWeAre")}>
        Credits
      </Text>
      <Text
        style={Styles.Text}
        onPress={() => navigation.navigate("DevelopmentEnvironment")}
      >
        DevelopmentEnvironment
      </Text>
    </SafeAreaView>
  );
}
