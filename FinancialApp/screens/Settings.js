import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhoWeAre from "./WhoWeAre";
import DevelopmentEnvironment from "./DevelopmentEnvironment";
import FeedbackScreen from "./FeedbackApp";
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
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
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

      <View style={Styles.Container}>
        <Image
          source={require("../assets/LogoProfile.png")}
          style={Styles.logoProfile}
        />
        <View style={Styles.ContainerTextInput}>
          <TextInput
            style={Styles.textInput}
            placeholder="Username"
            keyboardType="email-address"
            clearButtonMode="always"
            keyboardAppearance="dark"
            maxLength={10}
          />

          <TextInput
            style={Styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="visible-password"
            keyboardAppearance="dark"
            maxLength={10}
          />
        </View>
        <Button
          title="Login"
          onPress={() => Alert.alert("Successful login")}
        ></Button>
        <Button
          title="Sign up"
          onPress={() =>
            Alert.alert(
              "Thank you for your interest in our app, when it is ready we will inform you!"
            )
          }
        ></Button>
      </View>

      <Text style={Styles.Text} onPress={() => navigation.navigate("WhoWeAre")}>
        Credits
      </Text>
      <Text
        style={Styles.Text}
        onPress={() => navigation.navigate("DevelopmentEnvironment")}
      >
        DevelopmentEnvironment
      </Text>
      <Text
        style={Styles.Text}
        onPress={() => navigation.navigate("FeedbackScreen")}
      >
        FeedbackScreen
      </Text>
    </SafeAreaView>
  );
}
