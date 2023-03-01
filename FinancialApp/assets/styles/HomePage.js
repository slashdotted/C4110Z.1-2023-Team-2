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
    color: "blue",
    fontSize: 18,
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
    color: "blue",
  },

  GroupPhoto: {
    marginTop: 2,
    width: 350,
    height: 200,
    borderRadius: 2,
    marginBottom: 2,
  },

  ContainerPhoto: {
    alignItems: "baseline",
    width: 200,
    height: 200,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});
