import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'
import Colors from '../colors/Colors'

function IconSearch({
	color = Colors.primaryColor,
	width = scale(24),
	height = scale(24),
	...props
}: SvgProps) {
	return (
		<Svg
			fill="none"
			width={width}
			height={height}
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			viewBox="0 0 24 24"
			{...props}
		>
			<Circle cx={11} cy={11} r={8} />
			<Path d="M21 21L16.65 16.65" />
		</Svg>
	)
}

export default IconSearch
