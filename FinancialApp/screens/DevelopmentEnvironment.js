import { Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Styles from "../assets/styles/DevelopmentEnvironment";

export default function WhoWeAre({ navigation }) {
  return (
    <SafeAreaView>
      <View style={Styles.Container}>
        <Text style={Styles.boldText}> Logos of the apps that we used:</Text>
        <Image
          source={require("../assets/reactNative.png")}
          style={Styles.GroupPhoto}
        />
        <Image
          source={require("../assets/visualStudio.png")}
          style={Styles.visualStudio}
        />
        <Image
          source={require("../assets/gitHub.png")}
          style={Styles.GroupPhoto}
        />
        <Image
          source={require("../assets/expoGo.png")}
          style={Styles.GroupPhoto}
        />
      </View>
    </SafeAreaView>
  );
}
