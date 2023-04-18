import { Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Styles from "../assets/styles/WhoWeAre";

export default function WhoWeAre({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={Styles.Tittle}> Ciao</Text>
      </SafeAreaView>
    </ScrollView>
  );
}
