import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const IconDoubleLeft = ({
	color = '#212121',
	width = scale(20),
	height = scale(20),
	...props
}: SvgProps) => (
	<Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
		<Path
			d="M14.9583 15.8333L10.7917 10L14.9583 4.16667H12.9167L8.75 10L12.9167 15.8333H14.9583ZM10 15.8333L5.83333 10L10 4.16667H7.95833L3.79167 10L7.95833 15.8333H10Z"
			fill={color}
		/>
	</Svg>
)
export default IconDoubleLeft
