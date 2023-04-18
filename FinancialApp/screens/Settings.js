import { Text, SafeAreaView } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhoWeAre from "./WhoWeAre";
import DevelopmentEnvironment from "./DevelopmentEnvironment";

import Styles from "../assets/styles/Settings";
import { Header } from "react-native/Libraries/NewAppScreen";

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
      <Text>CIAO</Text>
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
