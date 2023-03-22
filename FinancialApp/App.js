import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomePage from "./screens/HomePage";
import Theory from "./screens/Theory";
import Demo from "./screens/Demo";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="white"
        inactiveColor="white"
        barStyle={{ backgroundColor: "#00CCCC" }}
      >
        <Tab.Screen name="Theory" component={Theory} />
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="Demo" component={Demo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
