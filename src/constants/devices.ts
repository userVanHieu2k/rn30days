import {Dimensions, Platform} from 'react-native';

export const isTablet = () => {
  if (Platform.OS == 'android' || Platform.OS == 'ios') {
  const {width, height} = Dimensions.get('window');
  const aspectRatio = height / width;
  return aspectRatio < 1.6;
  }
  return false;
};

export const isPhone = () => {
  if (Platform.OS == 'android' || Platform.OS == 'ios') {
    const {width, height} = Dimensions.get('window');
    const aspectRatio = height / width;
    return aspectRatio >= 1.6;
  }
  return Dimensions.get('window').width <= 768;
};
