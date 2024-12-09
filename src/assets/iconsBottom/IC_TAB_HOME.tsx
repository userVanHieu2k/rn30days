
import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { scale } from "../../utils/scale";

const IC_HOME = (props: any) => {
  const { width, height, isActive } = props;
  return (
    <Svg width={width || scale(20)} height={height || scale(20)} viewBox="0 0 21 20" fill="none">
      {
        isActive ?
          <Path
            d="M10.8972 0.980035C10.7865 0.885356 10.6456 0.833328 10.5 0.833328C10.3543 0.833328 10.2134 0.885356 10.1028 0.980035L1.33331 8.49668V17.3333C1.33331 17.8196 1.52647 18.2859 1.87028 18.6297C2.2141 18.9735 2.68042 19.1667 3.16665 19.1667H8.05553C8.21761 19.1667 8.37305 19.1023 8.48766 18.9877C8.60226 18.8731 8.66665 18.7176 8.66665 18.5555V14.8889C8.66665 14.4027 8.8598 13.9363 9.20362 13.5925C9.54743 13.2487 10.0137 13.0556 10.5 13.0556C10.9862 13.0556 11.4525 13.2487 11.7963 13.5925C12.1402 13.9363 12.3333 14.4027 12.3333 14.8889V18.5555C12.3333 18.7176 12.3977 18.8731 12.5123 18.9877C12.6269 19.1023 12.7823 19.1667 12.9444 19.1667H17.8333C18.3195 19.1667 18.7859 18.9735 19.1297 18.6297C19.4735 18.2859 19.6666 17.8196 19.6666 17.3333V8.49668L10.8972 0.980035Z"
            fill="#6846EF"
          />
          :
          <Path
            d="M10.5 1.4444L10.8972 0.979958C10.7865 0.88528 10.6456 0.833252 10.5 0.833252C10.3543 0.833252 10.2134 0.88528 10.1028 0.979958L10.5 1.4444ZM1.94442 8.77772L1.5472 8.31328L1.33331 8.49661V8.77772H1.94442ZM8.05553 18.5555V19.1666C8.21761 19.1666 8.37305 19.1022 8.48766 18.9876C8.60226 18.873 8.66665 18.7176 8.66665 18.5555H8.05553ZM12.9444 18.5555H12.3333C12.3333 18.7176 12.3977 18.873 12.5123 18.9876C12.6269 19.1022 12.7823 19.1666 12.9444 19.1666V18.5555ZM19.0555 8.77772H19.6666V8.49661L19.4528 8.31328L19.0555 8.77772ZM3.16665 19.1666H8.05553V17.9444H3.16665V19.1666ZM19.4528 8.31328L10.8972 0.979958L10.1028 1.90885L18.6583 9.24216L19.4528 8.31328ZM10.1028 0.979958L1.5472 8.31328L2.34165 9.24216L10.8972 1.90885L10.1028 0.979958ZM8.66665 18.5555V14.8888H7.44442V18.5555H8.66665ZM12.3333 14.8888V18.5555H13.5555V14.8888H12.3333ZM12.9444 19.1666H17.8333V17.9444H12.9444V19.1666ZM19.6666 17.3333V8.77772H18.4444V17.3333H19.6666ZM1.33331 8.77772V17.3333H2.55554V8.77772H1.33331ZM10.5 13.0555C10.9862 13.0555 11.4525 13.2486 11.7963 13.5925C12.1402 13.9363 12.3333 14.4026 12.3333 14.8888H13.5555C13.5555 14.0784 13.2336 13.3012 12.6606 12.7282C12.0876 12.1552 11.3104 11.8333 10.5 11.8333V13.0555ZM10.5 11.8333C9.6896 11.8333 8.9124 12.1552 8.33938 12.7282C7.76635 13.3012 7.44442 14.0784 7.44442 14.8888H8.66665C8.66665 14.4026 8.8598 13.9363 9.20362 13.5925C9.54743 13.2486 10.0137 13.0555 10.5 13.0555V11.8333ZM17.8333 19.1666C18.3195 19.1666 18.7859 18.9734 19.1297 18.6296C19.4735 18.2858 19.6666 17.8195 19.6666 17.3333H18.4444C18.4444 17.4953 18.38 17.6508 18.2654 17.7654C18.1508 17.88 17.9954 17.9444 17.8333 17.9444V19.1666ZM3.16665 17.9444C3.00457 17.9444 2.84913 17.88 2.73453 17.7654C2.61992 17.6508 2.55554 17.4953 2.55554 17.3333H1.33331C1.33331 17.8195 1.52647 18.2858 1.87028 18.6296C2.2141 18.9734 2.68042 19.1666 3.16665 19.1666V17.9444Z"
            fill="#4D5668"
            fillOpacity="0.8"
          />
      }
    </Svg>
  )
}
export default IC_HOME;




