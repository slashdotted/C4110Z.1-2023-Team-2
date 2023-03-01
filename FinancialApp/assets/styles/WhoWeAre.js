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
    width: 250,
    height: 130,
    borderRadius: 6,
    marginBottom: 2,
  },

  ContainerPhoto: {
    alignItems: "baseline",
  },

  SinglePhoto: {
    width: 150,
    height: 150,
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
    textDecorationLine: "underline",
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

  containerPortfolio: {
    borderTopWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  GroupPhotoPortfolio: {
    marginTop: 2,
    width: 350,
    height: 230,
    borderRadius: 10,
    marginBottom: 6,
  },

  textPortfolio: {
    textAlign: "center",
    color: "blue",
    fontStyle: "italic",
    fontSize: 14,
  },
});
