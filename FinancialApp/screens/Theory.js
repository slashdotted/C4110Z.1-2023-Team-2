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

import Quiz1 from "./EnglishQuiz/Quiz1";
import Quiz2 from "./EnglishQuiz/Quiz2";
import Quiz3 from "./EnglishQuiz/Quiz3";
import Quiz4 from "./EnglishQuiz/Quiz4";
import Quiz5 from "./EnglishQuiz/Quiz5";

import Theory1 from "./EnglishTheory/1";
import Theory2 from "./EnglishTheory/2";
import Theory3 from "./EnglishTheory/3";
import Theory4 from "./EnglishTheory/4";
import Theory5 from "./EnglishTheory/5";

const Stack = createNativeStackNavigator();

export default function TheoryMenu() {
  return (
    <Stack.Navigator initialRouteName="TheoryPage">
      <Stack.Screen name="TheoryPage" component={Theory} />
      <Stack.Screen name="Quiz1" component={Quiz1} />
      <Stack.Screen name="Quiz2" component={Quiz2} />
      <Stack.Screen name="Quiz3" component={Quiz3} />
      <Stack.Screen name="Quiz4" component={Quiz4} />
      <Stack.Screen name="Quiz5" component={Quiz5} />
      <Stack.Screen name="Theory1" component={Theory1} />
      <Stack.Screen name="Theory2" component={Theory2} />
      <Stack.Screen name="Theory3" component={Theory3} />
      <Stack.Screen name="Theory4" component={Theory4} />
      <Stack.Screen name="Theory5" component={Theory5} />
    </Stack.Navigator>
  );
}

function Theory({ navigation }) {
  return (
    <SafeAreaView style={Styles.Layout}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={Styles.boldText}>THEORY</Text>
          <Image
            source={require("../assets/theoryPart.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>

        <View style={Styles.Separator}>
          <Text>Here you can study the theory!</Text>
        </View>

        <Text style={Styles.separatorTextTheory}>Part one!</Text>

        <View style={Styles.Separator}>
          <Button
            color="#009999"
            title="Theory 1"
            onPress={() => navigation.navigate("Theory1")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Part two!</Text>
          <Button
            title="Theory 2"
            color="#009999"
            onPress={() => navigation.navigate("Theory2")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Part three!</Text>
          <Button
            title="Theory 3"
            color="#009999"
            onPress={() => navigation.navigate("Theory3")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Part four!</Text>
          <Button
            title="Theory 4"
            color="#009999"
            onPress={() => navigation.navigate("Theory4")}
          />
        </View>

        <View style={Styles.Separator}>
          <Text style={Styles.separatorTextTheory}>Part five!</Text>
          <Button
            title="Theory 5"
            color="#009999"
            onPress={() => navigation.navigate("Theory5")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
