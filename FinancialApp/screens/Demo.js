import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Styles from "../assets/styles/Demo";

const SettingsButton = ({ onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ alignItems: "flex-end", marginRight: 10 }}
        onPress={onPress}
      >
        <View style={Styles.button}>
          <Feather name="settings" size={24} color="white" />
        </View>
      </TouchableOpacity>

      <Text style={Styles.text}>Line graph</Text>
      <Image
        source={require("../assets/graficoCandele.jpg")}
        style={Styles.graficoCandele}
      />

      <Text style={Styles.text}>Candlestick chart</Text>
      <Image
        source={require("../assets/graficoLinea.png")}
        style={Styles.graficoLinea}
      />
    </SafeAreaView>
  );
};

export default SettingsButton;
