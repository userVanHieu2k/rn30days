import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import {scale} from '../../utils/scale';
import {Dropdown} from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import IconArrowDown from '../../assets/icons/IC_ARROW_DOWN';

const {width, height} = Dimensions.get('window');
interface ItemProps {
  label: string;
  value: any;
}
interface TextInputProps {
  increaseValue: () => void;
  decreaseValue: () => void;
  onChangeText: (text: string) => void;
  setDuration?: (text: number) => void;
  duration: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  checkDuration?: boolean;
  name?: string;
}

const data = [
  {label: 'Back', value: () => Easing.back(1.5)},
  {label: 'Bezier', value: () => Easing.bezier(0.42, 0, 0.58, 1)},
  {label: 'Bounce', value: Easing.bounce},
  {label: 'Circle', value: Easing.circle},
  {label: 'Cubic', value: Easing.cubic},
  {label: 'Ease', value: Easing.ease},
  {label: 'Elastic', value: () => Easing.elastic(1)},
  {label: 'Exp', value: Easing.exp},
  {label: 'Linear', value: Easing.linear},
  {label: 'Poly', value: () => Easing.poly(4)},
  {label: 'Quad', value: Easing.quad},
  {label: 'Sin', value: Easing.sin},
  {label: 'Steps', value: () => Easing.steps(5)},
  {label: 'In', value: () => Easing.in(Easing.ease)},
  {label: 'In Out', value: () => Easing.inOut(Easing.ease)},
  {label: 'Out', value: () => Easing.out(Easing.ease)},
];

const TextInputNumber = ({
  duration,
  minimumValue = 1000,
  maximumValue = 3000,
  step = 10,
  onChangeText,
  increaseValue,
  decreaseValue,
  setDuration,
  checkDuration = false,
  name,
}: TextInputProps) => {
  const [showButtonDuration, setShowButtonDuration] = useState<Boolean>(false);
  return (
    <>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={styles.text}>{name}</Text>
        <TextInput
          style={styles.textInput}
          onBlur={() => {
            console.log('kich hoat');

            setShowButtonDuration(false);
            Keyboard.dismiss();
          }}
          onFocus={() => setShowButtonDuration(true)}
          value={duration.toString()}
          keyboardType="numeric"
          onChangeText={onChangeText}
        />
        <View
          style={[
            styles.buttons,
            {
              display: showButtonDuration ? 'flex' : 'none',
            },
          ]}>
          <TouchableOpacity
            onPress={() => increaseValue()}
            style={styles.button}>
            <Text style={styles.text}>▲</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decreaseValue()}
            style={styles.button}>
            <Text style={styles.text}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>
      {checkDuration && (
        <>
          <Slider
            style={{width: width - scale(40), height: scale(30)}}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            value={duration}
            minimumTrackTintColor="#782aeb"
            thumbTintColor="#782aeb"
            maximumTrackTintColor="#c1c6e5"
            step={step}
            tapToSeek
            onValueChange={(value: number) => {
              const roundedValue = parseFloat(value.toFixed(2));
              setDuration?.(roundedValue);
              Keyboard.dismiss();
            }}
            onSlidingComplete={(value: number) => {
              const roundedValue = parseFloat(value.toFixed(2));
              setDuration?.(roundedValue);
              Keyboard.dismiss();
            }}
          />
        </>
      )}
    </>
  );
};

const TimingAnimated = () => {
  const offset = useSharedValue(width / 2 - 100);
  const [duration, setDuration] = useState(2000);
  const [value, setValue] = useState<string>('Ease');
  //Back
  const [StepToBack, setStepToBack] = useState<number>(1);
  //bezier
  const rotateValue = useSharedValue(0);
  const [showControls, setShowControls] = useState(false);
  const [x1, setX1] = useState<number>(0);
  const [y1, setY1] = useState<number>(0);
  const [x2, setX2] = useState<number>(0);
  const [y2, setY2] = useState<number>(0);
  // Hàm để xoay
  const rotateIcon = () => {
    rotateValue.value = withTiming(rotateValue.value === 0 ? 180 : 0, {
      duration: 500,
    }); // Xoay thêm 180 độ
    setShowControls(!showControls);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotateValue.value}deg`}],
  }));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));
  //Elastic
  const [elasticValue, setElasticValue] = useState<number>(0);
  //Poly
  const [polyValue, setPolyValue] = useState<number>(1);
  //Steps
  const [stepsValue, setStepsValue] = useState<number>(1);

  const animationTiming = (value: string) => {
    switch (value) {
      case 'Back':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.back(StepToBack),
          }),
          -1,
          false,
        );
        break;
      case 'Bezier':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.bezier(x1, y1, x2, y2),
          }),
          -1,
          false,
        );
        break;
      case 'Bounce':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.bounce,
          }),
          -1,
          false,
        );
        break;
      case 'Circle':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.circle,
          }),
          -1,
          false,
        );
        break;
      case 'Cubic':
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.cubic}),
          -1,
          false,
        );
        break;
      case 'Ease':
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.ease}),
          -1,
          false,
        );
        break;
      case 'Elastic':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.elastic(elasticValue),
          }),
          -1,
          false,
        );
        break;
      case 'Exp':
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.exp}),
          -1,
          false,
        );
        break;
      case 'Linear':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.linear,
          }),
          -1,
          false,
        );
        break;
      case 'Poly':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.poly(4),
          }),
          -1,
          false,
        );
        break;
      case 'Quad':
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.quad}),
          -1,
          false,
        );
        break;
      case 'Sin':
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.sin}),
          -1,
          false,
        );
        break;
      case 'Steps':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.steps(stepsValue),
          }),
          -1,
          false,
        );
        break;
      case 'In':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.in(Easing.ease),
          }),
          -1,
          false,
        );
        break;
      case 'In Out':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.inOut(Easing.ease),
          }),
          -1,
          false,
        );
        break;
      case 'Out':
        offset.value = withRepeat(
          withTiming(-offset.value, {
            duration: duration,
            easing: Easing.out(Easing.ease),
          }),
          -1,
          false,
        );
        break;
      default:
        offset.value = withRepeat(
          withTiming(-offset.value, {duration: duration, easing: Easing.ease}),
          -1,
          false,
        ); // Default function
        break;
    }
  };
  useEffect(() => {
    offset.value = width / 2 - 100;
    animationTiming(value);
  }, [duration, value, StepToBack, x1, x2, y1, y2, elasticValue, stepsValue]);

  //easeing item
  const renderItem = (item: ItemProps) => (
    <View style={[styles.item]}>
      <Text style={[styles.placeholderStyle]}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <ScrollView style={styles.form}>
        <View style={styles.duration}>
          <TextInputNumber
            name={'Duration'}
            duration={duration}
            checkDuration={true}
            setDuration={(i: number) => {
              setDuration(i);
            }}
            increaseValue={() => {
              setDuration(prev => (prev > 3000 ? 3000 : prev + 10));
            }}
            decreaseValue={() => {
              setDuration(prev => (prev > 1010 ? prev - 10 : 1000));
            }}
            onChangeText={(text: string) => {
              if (Number(text) < 1000) {
                setDuration(1000);
              } else setDuration(Number(text) || 0);
            }}
          />
        </View>
        <View style={styles.easing}>
          <Text style={styles.text}>Easing</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.textStyle}
            data={data}
            // search
            maxHeight={duration}
            labelField="label"
            valueField="value"
            placeholder={value}
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.label);
            }}
            renderItem={renderItem}
          />
        </View>
        {value === 'Back' && (
          <View style={styles.StepToBack}>
            <Text style={styles.text}>Step to Back</Text>
            <TextInputNumber
              duration={StepToBack}
              increaseValue={() => {
                setStepToBack(prev => (prev > 10 ? 10 : prev + 1));
              }}
              decreaseValue={() => {
                setStepToBack(prev => (prev > 0 ? prev - 1 : 0));
              }}
              onChangeText={(text: string) => {
                if (Number(text) > 0 && Number(text) <= 10) {
                  setStepToBack(Number(text) || 0);
                } else if (Number(text) > 10) {
                  setStepToBack(10);
                } else setStepToBack(0);
              }}
            />
          </View>
        )}
        {value === 'Bezier' && (
          <View style={styles.bezier}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={styles.bezierTouch} onPress={rotateIcon}>
                <Animated.View style={animatedStyle}>
                  <IconArrowDown width={scale(16)} height={scale(16)} />
                </Animated.View>
                {!showControls ? (
                  <Text style={styles.text}>Show controls</Text>
                ) : (
                  <Text style={styles.text}>Hide controls</Text>
                )}
              </TouchableOpacity>
            </View>
            {showControls && (
              <>
                <TextInputNumber
                  name={'x1'}
                  duration={x1}
                  maximumValue={1}
                  minimumValue={0}
                  step={0.01}
                  checkDuration={true}
                  setDuration={(i: number) => {
                    setX1(i);
                  }}
                  increaseValue={() => {
                    setX1(prev =>
                      Math.min(1, parseFloat((prev + 0.01).toFixed(2))),
                    );
                  }}
                  decreaseValue={() => {
                    setX1(prev =>
                      Math.max(0, parseFloat((prev - 0.01).toFixed(2))),
                    );
                  }}
                  onChangeText={(text: string) => {
                    if (Number(text) < 1) {
                      setX1(Number(text) || 0);
                    } else if (Number(text) < 0) {
                      setX1(0);
                    } else setX1(1);
                  }}
                />
                <TextInputNumber
                  name={'y1'}
                  duration={y1}
                  maximumValue={1}
                  minimumValue={0}
                  step={0.01}
                  checkDuration={true}
                  setDuration={(i: number) => {
                    setY1(i);
                  }}
                  increaseValue={() => {
                    setY1(prev =>
                      Math.min(2, parseFloat((prev + 0.01).toFixed(2))),
                    );
                  }}
                  decreaseValue={() => {
                    setY1(prev =>
                      Math.max(0, parseFloat((prev - 0.01).toFixed(2))),
                    );
                  }}
                  onChangeText={(text: string) => {
                    if (Number(text) < 2) {
                      setY1(Number(text) || 0);
                    } else if (Number(text) < 0) {
                      setY1(0);
                    } else setY1(2);
                  }}
                />
                <TextInputNumber
                  name={'x2'}
                  duration={x2}
                  maximumValue={1}
                  minimumValue={0}
                  step={0.01}
                  checkDuration={true}
                  setDuration={(i: number) => {
                    setX2(i);
                  }}
                  increaseValue={() => {
                    setX2(prev =>
                      Math.min(1, parseFloat((prev + 0.01).toFixed(2))),
                    );
                  }}
                  decreaseValue={() => {
                    setX2(prev =>
                      Math.max(0, parseFloat((prev - 0.01).toFixed(2))),
                    );
                  }}
                  onChangeText={(text: string) => {
                    if (Number(text) < 1) {
                      setX2(Number(text) || 0);
                    } else if (Number(text) < 0) {
                      setX2(0);
                    } else setX2(1);
                  }}
                />
                <TextInputNumber
                  name={'y2'}
                  duration={y2}
                  maximumValue={2}
                  minimumValue={0}
                  step={0.01}
                  checkDuration={true}
                  setDuration={(i: number) => {
                    setY2(i);
                  }}
                  increaseValue={() => {
                    setY2(prev =>
                      Math.min(2, parseFloat((prev + 0.01).toFixed(2))),
                    );
                  }}
                  decreaseValue={() => {
                    setY2(prev =>
                      Math.max(0, parseFloat((prev - 0.01).toFixed(2))),
                    );
                  }}
                  onChangeText={(text: string) => {
                    if (Number(text) < 2) {
                      setX1(Number(text) || 0);
                    } else if (Number(text) < 0) {
                      setY2(0);
                    } else setY2(2);
                  }}
                />
              </>
            )}
          </View>
        )}
        {value === 'Elastic' && (
          <View style={{marginTop: scale(8)}}>
            <TextInputNumber
              name={'Bounciness'}
              duration={elasticValue}
              maximumValue={10}
              minimumValue={0}
              step={0.1}
              checkDuration={true}
              setDuration={(i: number) => {
                setElasticValue(i);
              }}
              increaseValue={() => {
                setElasticValue(prev =>
                  Math.min(10, parseFloat((prev + 0.1).toFixed(1))),
                );
              }}
              decreaseValue={() => {
                setElasticValue(prev =>
                  Math.max(0, parseFloat((prev - 0.1).toFixed(1))),
                );
              }}
              onChangeText={(text: string) => {
                if (Number(text) < 10) {
                  setElasticValue(Number(text) || 0);
                } else if (Number(text) < 0) {
                  setElasticValue(0);
                } else setElasticValue(10);
              }}
            />
          </View>
        )}
        {value === 'Poly' && (
          <View style={{marginTop: scale(8)}}>
            <TextInputNumber
              name={'Power'}
              duration={polyValue}
              maximumValue={10}
              minimumValue={0}
              step={0.1}
              checkDuration={true}
              setDuration={(i: number) => {
                setPolyValue(i);
              }}
              increaseValue={() => {
                setPolyValue(prev =>
                  Math.min(10, parseFloat((prev + 0.1).toFixed(1))),
                );
              }}
              decreaseValue={() => {
                setPolyValue(prev =>
                  Math.max(1, parseFloat((prev - 0.1).toFixed(1))),
                );
              }}
              onChangeText={(text: string) => {
                if (Number(text) < 10) {
                  setPolyValue(Number(text) || 0);
                } else if (Number(text) < 1) {
                  setPolyValue(1);
                } else setPolyValue(10);
              }}
            />
          </View>
        )}
        {value === 'Steps' && (
          <View style={{marginTop: scale(8)}}>
            <TextInputNumber
              name={'Steps'}
              duration={stepsValue}
              maximumValue={15}
              minimumValue={1}
              step={0.1}
              checkDuration={true}
              setDuration={(i: number) => {
                setStepsValue(i);
              }}
              increaseValue={() => {
                setStepsValue(prev =>
                  Math.min(10, parseFloat((prev + 0.1).toFixed(1))),
                );
              }}
              decreaseValue={() => {
                setStepsValue(prev =>
                  Math.max(1, parseFloat((prev - 0.1).toFixed(1))),
                );
              }}
              onChangeText={(text: string) => {
                if (Number(text) < 15) {
                  setStepsValue(Number(text) || 0);
                } else if (Number(text) < 1) {
                  setStepsValue(1);
                } else setStepsValue(15);
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    flex: 1,
  },
  form: {
    backgroundColor: '#fff',
    height: '70%',
    paddingTop: scale(10),
    paddingHorizontal: scale(20),
  },
  duration: {
    width: width - scale(40),
  },
  text: {
    fontSize: scale(16),
    color: '#001A72',
  },
  textInput: {
    width: scale(70),
    borderColor: '#ccc',
    paddingHorizontal: scale(8),
    borderWidth: 1,
    height: scale(40),
  },
  buttons: {
    position: 'absolute',
    top: scale(4),
    right: scale(5),
  },
  button: {
    height: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  easing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    height: scale(30),
    width: scale(80),
    borderColor: '#ccc',
    borderWidth: 0.5,
    paddingLeft: scale(8),
  },
  icon: {
    marginRight: 0,
  },
  containerStyle: {},
  placeholderStyle: {
    fontSize: scale(14),
  },
  textStyle: {
    fontSize: scale(14),
    width: '100%',
  },
  selectedTextStyle: {
    fontSize: scale(14),
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  item: {
    width: scale(80),
    height: scale(30),
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    paddingLeft: scale(8),
  },
  StepToBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(8),
  },
  bezier: {
    marginVertical: scale(8),
  },
  bezierTouch: {
    width: scale(110),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimingAnimated;
