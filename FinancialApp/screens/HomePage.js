import { Text, Image, View, SafeAreaView, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Styles from "../assets/styles/HomePage";
import HomeSettings from "./Settings";
import Theory from "./Theory";

const Stack = createNativeStackNavigator();

export default function HomePageMenu() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="HomeSettings" component={HomeSettings} />
      <Stack.Screen name="Theory" component={Theory} />
    </Stack.Navigator>
  );
}

function HomePage({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <View style={Styles.ContainerPhoto}>
        <Image
          source={require("../assets/LogoApp.png")}
          style={Styles.GroupPhoto}
        ></Image>
      </View>

      <Image
        source={require("../assets/OpesName.png")}
        style={Styles.GroupPhoto}
      ></Image>

      <Button
        title="Settings"
        color="#00CCCC"
        style={Styles.SettingButton}
        onPress={() => navigation.navigate("HomeSettings")}
      ></Button>

      <Button
        title="Italiano"
        color="#00CCCC"
        style={Styles.SettingButton}
        onPress={() => navigation.navigate("HomeSettings")}
      ></Button>
      <Button
        title="English"
        color="#00CCCC"
        style={Styles.SettingButton}
        onPress={() => navigation.navigate("Theory")}
      ></Button>
    </SafeAreaView>
  );
}
