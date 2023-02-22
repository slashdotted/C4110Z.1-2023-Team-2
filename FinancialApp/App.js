import { Text, Image, View, SafeAreaView } from "react-native";
import Styles from "./assets/styles/Styles";

export default function App() {
  return (
    <SafeAreaView style={Styles.AdroidSafeArea}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={Styles.Logo}
      />
      <Text>User Name</Text>
      <View style={{ flex: 0.7, justifyContent: "center" }}>
        <Text>Name and Logo of the app</Text>
      </View>
      <Text>Tap to continue</Text>
    </SafeAreaView>
  );
}
