import {StyleSheet} from "react-native";
import { scale } from "../../utils/scale";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainTimeline: {
    width: "100%",
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textMainView: {
    fontSize: scale(50),
    fontWeight: "bold",
    color: "#fff",
  },
  buttonView: {
    width: "100%",
    height: '15%',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: scale(80),
    height: scale(80),
    backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonActive: {
    width: scale(80),
    height: scale(80),
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonUnActive: {
    width: scale(80),
    height: scale(80),
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  textButton:{
    color: 'white',
  },
  listTime: {
    width: "100%",
    minHeight: '60%',
  },
  timerContainer: {
    width: "100%",
    minHeight: '60%',
  },
  times: {
    width: "100%",
    minHeight: '60%',
  },
  item: {
    width: "100%",
    height: scale(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  title: {
    color: 'white',
    fontSize: scale(20),
  },
  
});
