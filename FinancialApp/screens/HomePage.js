import { Text, Image, View, SafeAreaView } from "react-native";
import Home from "../assets/styles/HomePage";

export default function HomePage() {
  return (
    <SafeAreaView style={Home.Layout}>
      <Image
        source={{ uri: "https://picsum.photos/150/150" }}
        style={Home.Logo}
      />
      <Text>User Name</Text>
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Text>Logo of the app</Text>
      </View>
      <Text>Tap to continue</Text>
    </SafeAreaView>
  );
}
