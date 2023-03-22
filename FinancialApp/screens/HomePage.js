import { Text, Image, View, SafeAreaView, Button } from "react-native";
import Styles from "../assets/styles/HomePage";

export default function HomePage() {
  return (
    <SafeAreaView style={Styles.Layout}>
      <View style={Styles.ContainerPhoto}>
        <Image
          source={require("../assets/LogoApp.png")}
          style={Styles.GroupPhoto}
        ></Image>
      </View>

      <Text style={Styles.boldText}>Name of the app</Text>
    </SafeAreaView>
  );
}
