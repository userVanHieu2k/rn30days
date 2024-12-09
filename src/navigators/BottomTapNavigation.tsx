import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {PlatformPressable} from '@react-navigation/elements';
import {DayOne, TempScreen} from '../screens';
import React from 'react';
import {View, Platform, Text, Pressable, StyleSheet, TouchableHighlight} from 'react-native';
import Routes from './Routes';
import {moderateScale, scale} from '../utils/scale';
import Colors from '../assets/colors/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IC_TAB_CALENDAR, IC_TAB_HOME} from '../assets/iconsBottom';
import { FontFamily } from '../constants';

const Tab = createBottomTabNavigator();

const getTabIcon = (index: number, isFocused: boolean) => {
	switch (index) {
		case 0:
			return <IC_TAB_HOME isActive={isFocused} />
		case 1:
			return <IC_TAB_CALENDAR isActive={isFocused} />
	}
}

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const insets = useSafeAreaInsets()
	return (
		<View style={{ backgroundColor: Colors.backgroundColor }}>
			<View
				style={[
					styles.tabBarContainer,
					{
						paddingBottom: insets.bottom,
						height: scale(55) + insets.bottom,
					},
				]}
			>
				{state.routes.map((route: any, index: number) => {
					const { options } = descriptors[route.key]
					const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name
					const isFocused = state.index === index
					const Icon = getTabIcon(index, isFocused)

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						})
						// if (index == 3 && !accessToken) {
						// 	return navigation.navigate(Routes.LOGIN_SCREEN)
						// }
						if (!isFocused && !event.defaultPrevented) {
							// The `merge: true` option makes sure that the params inside the tab screen are preserved
							//@ts-ignore
							navigation.navigate({ name: route.name, merge: true })
						}
					}

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						})
					}

					return (
						<TouchableHighlight key={route.key} underlayColor="white" accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarTestID} onPress={onPress} onLongPress={onLongPress} style={styles.tabContainer}>
							<View style={styles.vCenter}>
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{Icon}
								</View>
								<Text numberOfLines={1} style={[styles.tabItemLabel, isFocused && { color: Colors.primaryColor }]}>
									{label}
								</Text>
							</View>
						</TouchableHighlight>
					)
				})}
			</View>
		</View>
	)
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
    }}
      tabBar={(props: any) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={TempScreen} />
      <Tab.Screen name="Profile" component={DayOne} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
	tabBarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.white,
		borderTopLeftRadius: scale(24),
		borderTopRightRadius: scale(24),
		shadowColor: '#0000000D',
		shadowOffset: {
			width: scale(2),
			height: -scale(2),
		},
		shadowOpacity: 1,
		shadowRadius: scale(24),
		elevation: 24,
	},
	tabContainer: {
		flex: 1,
	},
	vCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabItemLabel: {
		marginTop: scale(2),
		fontFamily: FontFamily.Manrope500,
		fontSize: moderateScale(11),
		lineHeight: moderateScale(16.5),
		color: '#717886',
	},
})

export default MyTabs;
