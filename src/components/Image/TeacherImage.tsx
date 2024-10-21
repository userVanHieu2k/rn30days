import {images} from "@app/assets/images";
import {verticalScale} from "@app/utils/scale";
import React from "react";
import {Image, ImageProps, View} from "react-native";
import Config from "react-native-config";

interface CustomFastImage extends ImageProps {}

const TeacherImage = (props: CustomFastImage) => {
  const {source, onLoadEnd, onError} = props;
  const [noImage, setNoImage] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Image
      {...props}
      onLoadEnd={() => {
        setLoaded(true);
      }}
      source={
        //@ts-ignore
        (loaded && noImage) || source?.uri == null ? images.ErrorImage : source
      }
      onError={() => {
        setNoImage(true);
      }}
    />
  );
};
export default TeacherImage;
