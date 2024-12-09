import {StyleSheet} from "react-native";
import { scale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    width: '100%',
    paddingHorizontal: scale(20)
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
  button: {
    width: "100%",
    backgroundColor: "#D1E",
    justifyContent: "center",
    height: scale(40),
    marginTop: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
