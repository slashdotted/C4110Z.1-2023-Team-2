import { Text, Image, View, SafeAreaView, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Styles from "../assets/styles/HomePage";
import HomeSettings from "./Settings";

const Stack = createNativeStackNavigator();

export default function HomePageMenu() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="HomeSettings" component={HomeSettings} />
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
      <View style={{ flex: 0.9 }}>
        <Text style={Styles.boldText}>Name of the app</Text>
      </View>

      <Button
        title="Settings"
        color="#00CCCC"
        style={Styles.SettingButton}
        onPress={() => navigation.navigate("HomeSettings")}
      ></Button>
    </SafeAreaView>
  );
}
