import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {scale} from '../../utils/scale';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigators/Routes';

const TempScreen = (props: any) => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1)

  const actions = [
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'First Animation', action: () => navigation.navigate(Routes.FIRSTANIMATION)},
    {name: 'Second Animation', action: () => navigation.navigate(Routes.SECONDANIMATION)},
    {name: 'Timing Animation', action: () => navigation.navigate(Routes.TIMINGANIMATION)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
    {name: 'Day One', action: () => navigation.navigate(Routes.DAYONE)},
    {name: 'Day Two', action: () => navigation.navigate(Routes.DAYTWO)},
    {name: 'Day Three', action: () => navigation.navigate(Routes.DAYTHREE)},
    {
      name: 'Push Notification',
      action: () => navigation.navigate(Routes.PUSHNOTI),
    },
  ];
  const ITEM_HEIGHT = scale(40);
  const RenderItem = React.memo(({item}: any) => (
    <TouchableOpacity style={styles.button} onPress={item.action}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  ));

  const loadMoreData = () => {
    setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <FlatList
          data={actions.slice(0, number * 10)}
          keyExtractor={(_item: any, index) => index.toString()}
          renderItem={({item}) => <RenderItem item={item} />}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT, // Chiều cao của mỗi item
            offset: ITEM_HEIGHT * index,
            index,
          })}
          initialNumToRender={10} // Số lượng item render ban đầu
          maxToRenderPerBatch={10} // Số lượng item render mỗi batch
          windowSize={5} // Kích thước window render
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
        />
      </View>
    </View>
  );
};
export default TempScreen;
