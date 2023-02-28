import { Text, Image, View, SafeAreaView } from "react-native";
import Styles from "../assets/styles/WhoWeAre";

export default function WhoWeAre({ navigation }) {
  return (
    <SafeAreaView style={Styles.AdroidSafeArea}>
      <Text> We are the Team 2</Text>

      <Image source={require("../assets/1.jpg")} style={Styles.GroupPhoto} />
      <View style={{ flex: 0.2, justifyContent: "center", width: "50%" }}>
        <Text>
          AGGIUNGERE UNA VIEW PER OGNI FOTO COL NOME E RIGA SOTTO OGNI FOTO
        </Text>
      </View>

      <Image
        source={require("../assets/Leeann.png")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />

      <Image
        source={require("../assets/Nicholas.png")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />

      <Image
        source={require("../assets/Jon.png")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />

      <Image
        source={require("../assets/Jaden.png")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />

      <Image
        source={require("../assets/Guglielmo.jpeg")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />

      <Image
        source={require("../assets/Walter.png")}
        resizeMode="contain"
        style={Styles.SinglePhoto}
      />
    </SafeAreaView>
  );
}
