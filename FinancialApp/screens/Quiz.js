import { Text, Image, View, SafeAreaView, Button } from "react-native";

import Styles from "../assets/styles/Quiz";

export default function Quiz() {
  return (
    <SafeAreaView style={Styles.Layout}>
      <View style={Styles.Question}>
        <Text style={Styles.boldText}>Question</Text>
      </View>

      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}>Answer 1</Text>
      </View>
      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}>Answer 2</Text>
      </View>
      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}>Answer 3</Text>
      </View>
    </SafeAreaView>
  );
}
