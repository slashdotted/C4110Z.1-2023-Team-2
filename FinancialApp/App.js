import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Quiz from "./screens/Quiz";
import HomePage from "./screens/HomePage";
import WhoWeare from "./screens/WhoWeAre";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="#e91e63"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#f0edf6" }}
      >
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="WhoWeAre" component={WhoWeare} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
