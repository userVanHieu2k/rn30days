import { scale } from '@app/utils/scale'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const IC_BACK = (props: SvgProps) => {
  const { width = scale(24), height = scale(24), color = '#15141F' } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M6.7727 4.187C6.6824 4.09153 6.6119 3.97923 6.5651 3.8565C6.5183 3.73377 6.4961 3.60302 6.4998 3.47172C6.5035 3.34042 6.5331 3.21113 6.5867 3.09125C6.6404 2.97136 6.7172 2.86322 6.8127 2.773C6.9081 2.68279 7.0204 2.61226 7.1432 2.56544C7.2659 2.51863 7.3966 2.49644 7.5279 2.50016C7.6592 2.50387 7.7885 2.53341 7.9084 2.58709C8.0283 2.64077 8.1364 2.71753 8.2267 2.813L16.7267 11.813C16.9022 11.9987 17 12.2445 17 12.5C17 12.7555 16.9022 13.0013 16.7267 13.187L8.2267 22.188C8.137 22.2856 8.0289 22.3643 7.9086 22.4198C7.7883 22.4752 7.6581 22.5062 7.5257 22.5109C7.3933 22.5156 7.2613 22.4939 7.1374 22.4472C7.0134 22.4004 6.9 22.3295 6.8037 22.2386C6.7073 22.1476 6.6301 22.0384 6.5763 21.9173C6.5225 21.7963 6.4933 21.6657 6.4905 21.5333C6.4876 21.4008 6.511 21.2691 6.5595 21.1458C6.6079 21.0225 6.6804 20.9101 6.7727 20.815L14.6247 12.5L6.7727 4.187Z"
        fill={color}
      />
    </Svg>
  )
}
export default IC_BACK