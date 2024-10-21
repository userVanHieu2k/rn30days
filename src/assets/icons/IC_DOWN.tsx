import { IIcon } from '@app/types/icon'
import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const IC_DOWN = (props: SvgProps) => {
	const { width, height, color } = props
	return (
		<Svg
			width={width || scale(20)}
			height={height || scale(20)}
			viewBox="0 0 20 20"
			fill="none"
			{...props}
		>
			<Path
				d="M4.375 7.1875L10 12.8125L15.625 7.1875"
				stroke={color || '#15141F'}
				strokeOpacity="0.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}
export default IC_DOWN
