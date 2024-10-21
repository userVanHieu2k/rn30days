import {images} from "@app/assets/images";
import {verticalScale} from "@app/utils/scale";
import React from "react";
import {View} from "react-native";
import Config from "react-native-config";
import Image, {FastImageProps, Priority} from "react-native-fast-image";

interface CustomFastImage extends FastImageProps {
  priority?: Priority;
  isFromDetails?: boolean;
}

const CustomImage = (props: CustomFastImage) => {
  const {children, source, isFromDetails, onLoadEnd, onError} = props;
  const [noImage, setNoImage] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  return isFromDetails && noImage ? (
    <View style={{height: verticalScale(40)}} />
  ) : (
    <Image
      {...props}
      onLoadEnd={() => {
        setLoaded(true);
        onLoadEnd && onLoadEnd();
      }}
      source={loaded && noImage ? images.ErrorImage : source}
      onError={() => {
        setNoImage(true);
        onError && onError();
      }}>
      {children}
    </Image>
  );
};
export default CustomImage;
