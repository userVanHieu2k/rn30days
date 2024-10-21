import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../colors/Colors'

function IconSetting({
	color = Colors.primaryColor,
	width = scale(40),
	height = scale(40),
	...props
}: SvgProps) {
	return (
		<Svg fill="none" width={width} height={height} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} {...props}>
			<Path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
			/>
		</Svg>
	)
}

export default IconSetting
