import { Text, Image, View, SafeAreaView, Button } from "react-native";

import Styles from "../assets/styles/Theory";

export default function Quiz() {
  return (
    <SafeAreaView style={Styles.text}>
      <Text style={Styles.boldText}>THEORY</Text>
      <Image
        source={require("../assets/theoryPart.jpg")}
        style={Styles.GroupPhoto}
      />
    </SafeAreaView>
  );
}
