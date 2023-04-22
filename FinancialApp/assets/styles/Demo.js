import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  Layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    alignItems: "center",
  },

  TempText: {
    fontSize: 16,
    color: "#009999",
    fontWeight: "bold",
    paddingTop: 10,
  },

  button: {
    backgroundColor: "#00CCCC",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  graficoCandele: {
    borderColor: "#00CCCC",
    borderWidth: 2,
    marginTop: 20,
    width: 340,
    height: 150,
    borderRadius: 6,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
  },

  graficoLinea: {
    borderColor: "#00CCCC",
    borderWidth: 2,
    marginTop: 20,
    width: 340,
    height: 150,
    borderRadius: 6,
    marginBottom: 2,
    marginLeft: 20,
    marginRight: 20,
  },

  text: {
    fontWeight: "bold",
    color: "#00CCCC",
    fontSize: 18,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 4,
  },
});
