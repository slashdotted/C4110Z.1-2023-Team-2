import {
  Text,
  Image,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Styles from "../assets/styles/Theory";

import Quiz1 from "./ItalianQuiz/Quiz1";
import Quiz2 from "./ItalianQuiz/Quiz2";
import Quiz3 from "./ItalianQuiz/Quiz3";
import Quiz4 from "./ItalianQuiz/Quiz4";

import Theory1 from "./ItalianTheory/1Ita";
import Theory2 from "./ItalianTheory/2Ita";
import Theory3 from "./ItalianTheory/3Ita";
import Theory4 from "./ItalianTheory/4Ita";
import Theory5 from "./ItalianTheory/5Ita";

import CompoundReturnIta from "./CompoundReturnIta";

const Stack = createNativeStackNavigator();

export default function TheoryMenu() {
  return (
    <Stack.Navigator initialRouteName="TheoryPage">
      <Stack.Screen name="TheoryPage" component={Theory} />
      <Stack.Screen name="Quiz1" component={Quiz1} />
      <Stack.Screen name="Quiz2" component={Quiz2} />
      <Stack.Screen name="Quiz3" component={Quiz3} />
      <Stack.Screen name="Quiz4" component={Quiz4} />
      <Stack.Screen name="Theory1" component={Theory1} />
      <Stack.Screen name="Theory2" component={Theory2} />
      <Stack.Screen name="Theory3" component={Theory3} />
      <Stack.Screen name="Theory4" component={Theory4} />
      <Stack.Screen name="Theory5" component={Theory5} />
      <Stack.Screen name="CompoundReturnIta" component={CompoundReturnIta} />
    </Stack.Navigator>
  );
}

function Theory({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.boldText}>TEORIA</Text>
          <Image
            source={require("../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>

        <View style={Styles.Separator}>
          <Text>Qui puoi studiare la teoria!</Text>
        </View>

        <Text style={Styles.separatorTextTheory}>Parte uno!</Text>

        <View style={Styles.Separator}>
          <Button
            color="#009999"
            title="Teoria 1"
            onPress={() => navigation.navigate("Theory1")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Parte due!</Text>
          <Button
            title="Teoria 2"
            color="#009999"
            onPress={() => navigation.navigate("Theory2")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Parte tre!</Text>
          <Button
            title="Teoria 3"
            color="#009999"
            onPress={() => navigation.navigate("Theory3")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Parte quattro!</Text>
          <Button
            title="Teoria 4"
            color="#009999"
            onPress={() => navigation.navigate("Theory4")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Parte cinque!</Text>
          <Button
            title="Teoria 5"
            color="#009999"
            onPress={() => navigation.navigate("Theory5")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
