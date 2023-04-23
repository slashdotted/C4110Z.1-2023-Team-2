import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
  },

  Logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  boldText: {
    fontWeight: "bold",
    color: "#00CCCC",
    fontSize: 19,
    paddingTop: 10,
    textDecorationLine: "underline",
  },

  name: {
    fontWeight: "600",
    fontSize: 18,
    color: "blue",
  },

  extraName: {
    fontWeight: "600",
    fontSize: 15,
    color: "#00CCCC",
  },

  GroupPhoto: {
    width: 450,
    height: 140,
    borderRadius: 2,
    marginBottom: 2,
  },

  ContainerPhoto: {
    alignItems: "center",
    width: 200,
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 120,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: 100,
  },

  SettingButton: {
    position: "relative",
    top: 0,
    right: 0,
  },

  LastButton: {
    position: "relative",
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

  button: {
    backgroundColor: "#00CCCC",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
});
