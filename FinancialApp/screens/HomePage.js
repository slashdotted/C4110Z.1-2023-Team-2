import { Text, Image, View, SafeAreaView, Button } from "react-native";
import Styles from "../assets/styles/HomePage";

export default function HomePage() {
  return (
    <SafeAreaView style={Styles.Layout}>
      <Image
        source={{ uri: "https://picsum.photos/150/150" }}
        style={Styles.Logo}
      />
      <Text style={Styles.name}> User Name </Text>
      <View style={Styles.ContainerPhoto}>
        <Image
          source={require("../assets/LogoApp.png")}
          style={Styles.GroupPhoto}
        ></Image>
      </View>

      <Text style={Styles.extraName}>Tap to continue</Text>
    </SafeAreaView>
  );
}
