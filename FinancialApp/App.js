import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Quiz from "./screens/Quiz";
import HomePage from "./screens/HomePage";
import WhoWeare from "./screens/WhoWeAre";
import CompoundReturn from "./screens/CompoundReturn";
import Theory from "./screens/Theory";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="darkblue"
        inactiveColor="white"
        barStyle={{ backgroundColor: "blue" }}
      >
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="Theory" component={Theory} />
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="Who We are" component={WhoWeare} />
        <Tab.Screen name="Compound Return" component={CompoundReturn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
