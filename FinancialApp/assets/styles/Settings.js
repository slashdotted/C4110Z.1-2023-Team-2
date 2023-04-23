import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 0.1,
    height: "50%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Text: {
    top: "50%",
    fontSize: 24,
    color: "#00CCCC",
    fontStyle: "italic",
  },

  Container: {
    marginTop: 30,
    borderColor: "#00CCCC",
    borderWidth: 4,
    width: 250,
    height: 240,
    marginBottom: 30,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#00CCCC",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  logoProfile: {
    width: 80,
    height: 80,
    borderRadius: "10",
    marginTop: 10,
  },

  textInput: {
    marginTop: 3,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#00CCCC",
  },

  ContainerTextInput: {
    alignItems: "center",
  },
});
