import Colors from "@app/assets/colors/Colors";
import {moderateScale, verticalScale} from "@app/utils/scale";
import ReadMore from "@fawazahmed/react-native-read-more";
import React, {useCallback, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextProps,
  TextStyle,
  LayoutChangeEvent,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from "react-native";
interface IProps extends TextProps {
  lineHeight: number;
  content?: string;
  styleText?: TextStyle;
  widthItem: number;
}

const ShowMoreText = (props: IProps) => {
  const {t} = useTranslation();
  // const [showMoreButton, setShowMoreButton] = useState(false);
  // const [textShown, setTextShown] = useState(false);
  // const [numLines, setNumLines] = useState<any>(undefined);

  // const toggleTextShown = () => {
  //   setTextShown(!textShown);
  // };

  // useEffect(() => {
  //   setNumLines(textShown ? undefined : 2);
  // }, [textShown]);

  // const onTextLayout = useCallback(
  //   (e: NativeSyntheticEvent<TextLayoutEventData>) => {
  //     if (e.nativeEvent.lines.length >= 2 && !textShown) {
  //       if (
  //         Math.ceil(e.nativeEvent.lines[1].width) >=
  //         Math.ceil(props.widthItem) - 5
  //       ) {
  //         setShowMoreButton(true);
  //       }
  //       setNumLines(2);
  //     }
  //   },
  //   [textShown],
  // );

  return (
    <>
      <ReadMore
        numberOfLines={2}
        seeLessStyle={styles.textShowMore}
        seeMoreStyle={styles.textShowMore}
        seeMoreText={t("time_sheet.show_more")}
        seeLessText={t("time_sheet.show_less")}
        style={styles.textContent}
        seeMoreContainerStyleSecondary={{position: "relative"}}>
        {props.content}
      </ReadMore>
      {/* <Text
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        style={props.styleText}
        ellipsizeMode="tail">
        {props.content}
      </Text>

      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={styles.textShowMore}>
          {!textShown ? t("time_sheet.show_more") : t("time_sheet.show_less")}
        </Text>
      ) : null} */}
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  textContent: {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: Colors.textHeader,
    marginTop: verticalScale(3),
  },
  textShowMore: {
    color: Colors.textHeaderOpacity40,
    marginTop: 4,
    fontSize: moderateScale(14),
  },
});
export default ShowMoreText;
