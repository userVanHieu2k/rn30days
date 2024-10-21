import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

function IconArrowDown({
	color = '#4263EB',
	width = scale(24),
	height = scale(24),
	...props
}: SvgProps) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M3.687 6.773a1 1 0 10-1.374 1.454l9 8.5a1 1 0 001.374 0l9.001-8.5a1 1 0 10-1.373-1.454L12 14.625 3.687 6.773z"
				fill={color}
			/>
		</Svg>
	)
}

export default IconArrowDown
