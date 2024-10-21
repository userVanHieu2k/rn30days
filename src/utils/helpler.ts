import axios from "axios";
import moment, {duration} from "moment";
import {Platform} from "react-native";

export const isAndroid = Platform.OS === "android";

export const formatPhoneNumber = (phoneNumber?: string) => {
  if (!phoneNumber) {
    return "";
  }
  const start = phoneNumber.slice(0, 4);
  const content = phoneNumber.slice(4, 7);
  const end = phoneNumber.slice(7);

  return start + " " + content + " " + end;
};

export const getDayOfWeek = (date?: string) => {
  const day = moment(date).day();

  switch (day) {
    case 0:
      return "Chủ nhật";
    case 1:
      return "Thứ hai";
    case 2:
      return "Thứ ba";
    case 3:
      return "Thứ tư";
    case 4:
      return "Thứ năm";
    case 5:
      return "Thứ sáu";
    case 6:
      return "Thứ bảy";
    default:
      break;
  }
};

export const actualOtTime = async (duration?: string, date?: string) => {
  const dayOfWeek = moment(date).day();
  const isWeekend = dayOfWeek == 0 || dayOfWeek == 6;
  const hours = timeToDecimal(duration) || "0";
  const holidays = await getHoliday();
  const isDayOff =
    holidays.filter(
      (i: any) => i?.start?.date == moment(date).format("YYYY-MM-YY"),
    ).length > 0;
  let actualWork = 0;
  let actualSabbatical = 0;

  if (isDayOff) {
    actualWork = (parseInt(hours) / 8) * 2;
    actualSabbatical = (parseInt(hours) / 8) * 1;
  } else if (isWeekend) {
    actualWork = (parseInt(hours) / 8) * 1.5;
    actualSabbatical = (parseInt(hours) / 8) * 0.5;
  } else {
    actualWork = (parseInt(hours) / 8) * 1;
    actualSabbatical = (parseInt(hours) / 8) * 0.5;
  }

  return {
    actualWork,
    actualSabbatical,
  };
};

const getHoliday = async () => {
  const BASE_CALENDAR_URL = "https://www.googleapis.com/calendar/v3/calendars";
  const BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY =
    "holiday@group.v.calendar.google.com"; // Calendar Id. This is public but apparently not documented anywhere officialy.
  const API_KEY = "AIzaSyCp5RCSLZrwEDvabrKVS_1bgqCN8uy3858";
  const CALENDAR_REGION = "en.vietnamese";

  const url = `${BASE_CALENDAR_URL}/${CALENDAR_REGION}%23${BASE_CALENDAR_ID_FOR_PUBLIC_HOLIDAY}/events?key=${API_KEY}`;
  const res: any = await axios.get(url);

  const holidays: [any] = res?.data?.items;

  const dayOff = holidays.filter((value: any) => {
    if (
      (value?.summary == "Tet holiday" ||
        value?.summary == "International New Year's Day" ||
        value?.summary == "International Labor Day" ||
        value?.summary == "Vietnamese New Year" ||
        value?.summary == "Independence Day Holiday" ||
        value?.summary == "Hung Kings Festival" ||
        value?.summary == "Liberation Day/Reunification Day") &&
      value?.start?.date.includes(`${moment().year()}`)
    ) {
      return value?.start?.date;
    }
  });
  return dayOff;
};

export function timeToDecimal(duration?: string) {
  if (!duration) {
    return 0;
  }
  const t = duration.split(":");
  const hour = parseInt(t[0], 10);
  const des = parseInt(t[1], 10) / 60;
  return parseFloat((hour + des).toString()).toFixed(3);
}

export function timeSince(time: string) {
  const date = moment(time).valueOf();
  //@ts-ignore
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm trước";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng trước";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return Math.floor(seconds) + " giây trước";
}
