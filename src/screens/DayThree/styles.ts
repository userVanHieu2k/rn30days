import { StyleSheet } from "react-native";
import { Circle } from "react-native-maps";
import { scale } from "../../utils/scale";


export default StyleSheet.create({
    container: {flex: 1, backgroundColor: 'black', position: 'relative', justifyContent: 'center', alignItems: 'center'},
    containerPush: {flex: 1,position: 'relative', justifyContent: 'center', alignItems: 'center'},
    Circle: {width: scale(100), height: scale(100), borderRadius: scale(50), backgroundColor: 'blue'},
    buttonBlue: { width: '80%', height: scale(50),backgroundColor: 'blue', marginBottom: scale(30), borderRadius: scale(50), justifyContent:'center', alignItems: 'center'},
    buttonRed: { width: '80%', height: scale(50),backgroundColor: 'red', marginBottom: scale(30), borderRadius: scale(50), justifyContent:'center', alignItems: 'center'},
    buttonBlack: { width: '80%', height: scale(50),backgroundColor: 'black', borderRadius: scale(50), justifyContent:'center', alignItems: 'center'},
    text: {color: 'white'}
});