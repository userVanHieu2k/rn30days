import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import styles from "./styles";
import moment from 'moment'

interface TimerProps {
  interval: number;
  style: TextStyle;
}

interface ItemProps {
  interval: number,
  index: number
}

function Timer({ interval, style }: TimerProps) {
  const pad = (n: number) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())},</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  )
}
const DayOne = (props: any) => {
  const [interval, setIntervalTime] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [nameL, setNameL] = useState('Đặt lại');
  const [nameR, setNameR] = useState("Bắt đầu");
  const [running, setRunning] = useState(false);
  const [check, setCheck] = useState(false);
  const [list, setList] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const pad = (n: number) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  const startTimer = () => {
    setRunning(true);
    setNameR('Dừng')
    setCheck(true);
    setNameL('Vòng')
    intervalRef.current = setInterval(() => {
      setIntervalTime((prevInterval) => prevInterval + 10);
    }, 10);
  };

  const stopTimer = () => {
    setRunning(false);
    setNameR('Bắt đầu')
    setCheck(false);
    setNameL('Đặt lại')
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    console.log('LIST e', list);
  };

  const resetTimer = () => {
    stopTimer();
    setIntervalTime(0);
    setEnd(0);
    setList([]);
  };
  const addList = () => {
    setList((prevList) => [...prevList, interval - end ]);
    setEnd(interval)
    console.log('LIST', list);
    
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const Item = ({interval, index }: ItemProps) => {
    const duration = moment.duration(interval);
    const pad = (n: number) => (n < 10 ? '0' + n : n);
    const centiseconds = Math.floor(duration.milliseconds() / 10);
    
    return (
      <View style={styles.item}>
        <Text style={styles.title}>
        Vòng {index}
        </Text>
        <Text style={styles.title}>
           {pad(duration.minutes())}:{pad(duration.seconds())},{pad(centiseconds)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainTimeline}>
      <Text style={styles.textMainView}>{pad(duration.minutes())}:</Text>
        <Text style={styles.textMainView}>{pad(duration.seconds())},</Text>
        <Text style={styles.textMainView}>{pad(centiseconds)}</Text>
      </View>
      <View style={styles.buttonView}>
          <TouchableOpacity onPress={!check ? resetTimer: addList} style={styles.button}>
            <Text style={styles.textButton}>{nameL}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={!running ? startTimer: stopTimer} style={!running ? styles.buttonUnActive: styles.buttonActive}>
            <Text style={styles.textButton}>{nameR}</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.listTime}>
          <FlatList
            data={list.slice().reverse()}
            renderItem={({item, index}) => <Item index={list.length - index} interval={item}/>}
            keyExtractor={item => item.toString()}
          />
      </View>
    </View>
  );
};

export default DayOne;

