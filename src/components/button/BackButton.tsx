
import React, { PropsWithChildren } from 'react'
import {
	GestureResponderEvent,
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { hitSlop, moderateScale, scale } from '../../utils/scale'
import IC_BACK from '../../assets/icons/IC_BACK'

interface LinearButtonProps extends PropsWithChildren {
	colors?: [string, string]
	style?: StyleProp<ViewStyle>
	containerStyle?: StyleProp<ViewStyle>
	onPress: (event: GestureResponderEvent) => void
	disabled?: boolean
}

const DEFAULT_COLOR = ['#00AEEF', '#287BCF']
const LinearButton = (props: LinearButtonProps) => {
	const { colors, style = {}, containerStyle = {}, onPress, disabled = false } = props

	return (
		<TouchableOpacity onPress={onPress} hitSlop={hitSlop} disabled={disabled} style={containerStyle}>
			<LinearGradient
				colors={colors || DEFAULT_COLOR}
				style={[styles.button, style]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			>
				<IC_BACK color={'#fff'} />
			</LinearGradient>
		</TouchableOpacity>
	)
}

export default LinearButton

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: scale(48),
		width: scale(48),
		borderRadius: 9999,
	},
	text: {
		fontSize: moderateScale(16),
		lineHeight: moderateScale(24),
		color: '#FEFEFE',
	},
})
