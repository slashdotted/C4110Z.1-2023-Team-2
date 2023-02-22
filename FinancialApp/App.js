import { Text, Image, View, SafeAreaView } from "react-native";
import Styles from "./assets/styles/HomePage";

export default function App() {
  return (
    <SafeAreaView style={Styles.AdroidSafeArea}>
      <Image
        source={{ uri: "https://picsum.photos/150/150" }}
        style={Styles.Logo}
      />
      <Text>User Name</Text>
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Text>Logo of the app</Text>
      </View>
      <Text>Tap to continue</Text>
    </SafeAreaView>
  );
}
