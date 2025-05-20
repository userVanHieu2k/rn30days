import { memo, useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type ChildProps = { data: { count: number } };
// React.memo chỉ giúp tránh re-render nếu props không thay đổi.
// Nhưng với object hoặc array, mỗi lần ParentComponent render, một object mới { value: count } sẽ được tạo.
const ChildComponent = memo(({ data }: ChildProps) => {
    console.log('re-render');
    return (
        <View><Text>{data.count}</Text></View>
    )
})

const Memo = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')
    // 🛠 useMemo giữ nguyên object nếu count không đổi
  const data = useMemo(() => ({ count: count }), [count]);

    return (
        <View>
            <ChildComponent data={data} />
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>{count}</Text>
            </TouchableOpacity>
            <TextInput value={value} placeholder="nhap gia tri" onChangeText={setValue}/>
        </View>
    )
}

export default Memo;