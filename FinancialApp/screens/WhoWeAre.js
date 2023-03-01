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
          <Text style={Styles.textScrollDown}>You can scroll down</Text>
        </View>

        <View style={Styles.ContainerPhoto}>
          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> LEEAN RUNKLE - PSU </Text>
            <Image
              source={require("../assets/Leeann.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> JON WHITBY - PSU </Text>
            <Image
              source={require("../assets/Jon.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> JADEN WEED - PSU </Text>
            <Image
              source={require("../assets/Jaden.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> NICHOLAS CERA - PSU </Text>
            <Image
              source={require("../assets/Nicholas.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> GUGLIELMO GAGLIARDI - SUPSI </Text>
            <Image
              source={require("../assets/Guglielmo.jpeg")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>

          <View style={Styles.containerSinglePhoto}>
            <Text style={Styles.name}> WALTER SOSTENE LOSA - SUPSI </Text>
            <Image
              source={require("../assets/Walter.png")}
              style={Styles.SinglePhoto}
            ></Image>
          </View>
        </View>

        <View style={Styles.containerPortfolio}>
          <Text style={Styles.boldText}> Portfolio</Text>
          <Image
            source={require("../assets/2.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/3.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/4.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/5.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/6.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/7.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />
          <Image
            source={require("../assets/8.jpg")}
            style={Styles.GroupPhotoPortfolio}
          />

          <Text style={Styles.textPortfolio}>
            This photo was taken during the activity called "Watson Adventures"
            in Times Square
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
