import {StyleSheet} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  input: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "gray",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  loginTextButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "500"
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    height: 40,
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
