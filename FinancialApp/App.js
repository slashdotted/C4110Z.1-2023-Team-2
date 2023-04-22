import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Demo from "./screens/Demo";
import HomePageMenu from "./screens/HomePage";

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
        <Tab.Screen name="Homepage" component={HomePageMenu} />
        <Tab.Screen name="Demo" component={Demo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
