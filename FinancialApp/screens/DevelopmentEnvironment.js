import { Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Styles from "../assets/styles/DevelopmentEnvironment";

export default function WhoWeAre({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={Styles.Tittle}>
          Here you can see the logos of the applications used:
        </Text>

        <View style={Styles.Container}>
          <Image
            source={require("../assets/reactNative.png")}
            style={Styles.GroupPhoto}
          />
        </View>

        <View style={Styles.Container}>
          <Image
            source={require("../assets/reactNative.png")}
            style={Styles.GroupPhoto}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
