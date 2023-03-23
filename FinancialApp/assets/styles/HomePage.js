import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  boldText: {
    fontWeight: "bold",
    color: "#009999",
    fontSize: 18,
    paddingTop: 10,
  },

  name: {
    fontWeight: "600",
    fontSize: 18,
    color: "blue",
  },

  extraName: {
    fontWeight: "600",
    fontSize: 15,
    color: "blue",
  },

  GroupPhoto: {
    width: 350,
    height: 200,
    borderRadius: 2,
    marginBottom: 2,
  },

  ContainerPhoto: {
    alignItems: "center",
    width: 200,
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 80,
  },

  SettingButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  nameApp: {
    fontWeight: "1000",
    fontSize: 28,
    backgroundColor: "#00CCCC",
    color: "white",
    fontStyle: "italic",
  },
});
