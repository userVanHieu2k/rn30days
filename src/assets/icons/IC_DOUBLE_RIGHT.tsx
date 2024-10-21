import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const IconDoubleRight = ({
	color = '#212121',
	width = scale(20),
	height = scale(20),
	...props
}: SvgProps) => (
	<Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
		<Path
			d="M5.04169 15.8333L9.20835 10L5.04169 4.16667H7.08335L11.25 10L7.08335 15.8333H5.04169ZM10 15.8333L14.1667 10L10 4.16667H12.0417L16.2084 10L12.0417 15.8333L10 15.8333Z"
			fill={color}
		/>
	</Svg>
)
export default IconDoubleRight
