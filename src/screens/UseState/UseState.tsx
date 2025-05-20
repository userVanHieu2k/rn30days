import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native";


const AppState = () => {
    const [count, SetCount] = useState(() => 2)
    const [count1, SetCount1] = useState(4)

    function expensiveComputation() {
        console.log("Computing...");
        return 42;
    }
    return (
        <View style={{flex: 1}}>
            <Text>{count}</Text>
            <Text>number: {count1}</Text>
            <TouchableOpacity onPress={() => SetCount1(count1 + 1)}><Text>+1</Text></TouchableOpacity>
        </View>
    )
}

export default AppState;
