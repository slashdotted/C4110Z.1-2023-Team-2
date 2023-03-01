import { Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import Styles from "../assets/styles/WhoWeAre";

export default function WhoWeAre({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Styles.Container}>
          <Text style={Styles.boldText}> We are Team 2</Text>
          <Image
            source={require("../assets/group.jpg")}
            style={Styles.GroupPhoto}
          />
        </View>

        <View style={{ alignContent: "center" }}>
          <Text style={Styles.textScrollDown}>Scroll Down</Text>
        </View>

        <View style={Styles.ContainerPhoto}>
          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> LEEAN RUNKLE </Text>
            <Image
              source={require("../assets/Leeann.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> JON WHITBY </Text>
            <Image
              source={require("../assets/Jon.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> JADEN WEED </Text>
            <Image
              source={require("../assets/Jaden.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> NICHOLAS CERA </Text>
            <Image
              source={require("../assets/Nicholas.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> GUGLIELMO GAGLIARDI </Text>
            <Image
              source={require("../assets/Guglielmo.jpeg")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> WALTER SOSTENE LOSA </Text>
            <Image
              source={require("../assets/Walter.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
