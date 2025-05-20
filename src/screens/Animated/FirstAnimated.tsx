import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import UserApi from '../../networking/apis/User';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../navigators/Routes';

export default function FirstAnimated() {
  const navigation = useNavigation();
  const width = useSharedValue(100);
  const fetchData = async () => {
    try {
      const response = await UserApi.getUserTodos();
      console.log('Response:', response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
    navigation.navigate(Routes.LOGIN)
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}