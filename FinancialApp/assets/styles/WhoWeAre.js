import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  AdroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  Container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "blue",
  },

  GroupPhoto: {
    marginTop: 2,
    width: 200,
    height: 100,
    borderRadius: 6,
    marginBottom: 2,
  },

  ContainerPhoto: {
    alignItems: "baseline",
  },

  SinglePhoto: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
  },

  textScrollDown: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },

  boldText: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 18,
  },

  name: {
    fontWeight: "600",
    fontSize: 15,
    color: "blue",
  },

  containerSinglePhoto: {
    marginBottom: 2,
    marginTop: 1,
  },
});
