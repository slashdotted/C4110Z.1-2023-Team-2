import {
  Text,
  Image,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Styles from "../assets/styles/HomePage";
import HomeSettings from "./Settings";
import Theory from "./Theory";
import TheoryItalian from "./TheoryItalian";
import CompoundReturn from "./CompoundReturn";

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
      <Stack.Screen name="TheoryItalian" component={TheoryItalian} />
      <Stack.Screen name="CompoundReturn" component={CompoundReturn} />
    </Stack.Navigator>
  );
}

function HomePage({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={Styles.Layout}>
        <View style={{ alignItems: "flex-end" }}>
          <Button
            title="Settings"
            color="#00CCCC"
            style={Styles.SettingButton}
            onPress={() => navigation.navigate("HomeSettings")}
          ></Button>
        </View>

        <View style={Styles.ContainerPhoto}>
          <Image
            source={require("../assets/OpesName.png")}
            style={Styles.GroupPhoto}
          ></Image>
          <Text style={Styles.boldText}>Financial Literacy App</Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 160 }}>
          <Text style={Styles.extraName}>
            Choose your languages / scegli la tua lingua:
          </Text>
        </View>

        <Button
          title="English"
          color="#00CCCC"
          style={Styles.SettingButton}
          onPress={() => navigation.navigate("Theory")}
        ></Button>
        <Button
          title="Italiano"
          color="#00CCCC"
          style={Styles.SettingButton}
          onPress={() => navigation.navigate("TheoryItalian")}
        ></Button>

        <Button
          title="Compound Return"
          color="#00CCCC"
          style={Styles.SettingButton}
          onPress={() => navigation.navigate("CompoundReturn")}
        ></Button>
      </SafeAreaView>
    </ScrollView>
  );
}
