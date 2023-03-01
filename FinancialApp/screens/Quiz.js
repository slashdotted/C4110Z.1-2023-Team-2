import { Text, Image, View, SafeAreaView, Button } from "react-native";

import Styles from "../assets/styles/Quiz";

export default function Quiz() {
  return (
    <SafeAreaView style={Styles.Layout}>
      <View style={Styles.Question}>
        <Text style={Styles.boldText}>Question</Text>
      </View>

      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}> Cos'è sta merda</Text>
      </View>
      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}>Mi vergogno</Text>
      </View>
      <View style={Styles.Answer}>
        <Text style={{ fontSize: 28 }}>Walter</Text>
      </View>
    </SafeAreaView>
  );
}
