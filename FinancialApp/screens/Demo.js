import { Text, Image, View, SafeAreaView, Button } from "react-native";
import Styles from "../assets/styles/Demo";

export default function Quiz() {
  return (
    <SafeAreaView style={Styles.Layout}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={Styles.TempText}>
          Here will be the page with the demo part
        </Text>
      </View>
    </SafeAreaView>
  );
}
