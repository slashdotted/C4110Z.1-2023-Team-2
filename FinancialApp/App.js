import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Quiz from "./screens/Quiz";
import HomePage from "./screens/HomePage";
import HomeSettings from "./screens/Settings";
import Theory from "./screens/Theory";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="white"
        inactiveColor="white"
        barStyle={{ backgroundColor: "blue" }}
      >
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="Theory" component={Theory} />
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="Settings" component={HomeSettings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
