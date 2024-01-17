import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { Text } from "../Text/Text";
import { translate } from "../../services/translation.service";
import { colors } from "../../utils/colors";

type CalenderPickerProps = {
  openStartDatePicker: boolean;
  setOpenStartDatePicker: (value: boolean) => void;
};

export const CalenderPicker = () => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }
  const handleDateChange = (date) => {
    setStartedDate(date);
    setSelectedStartDate(date);
  };
  console.log("selectedStartDate", selectedStartDate);
  return (
    <DatePicker
      mode="calendar"
      minimumDate={startDate}
      selected={startedDate}
      onDateChanged={handleChangeStartDate}
      onSelectedChange={(date) => {
        handleDateChange(date);
      }}
      options={{
        backgroundColor: colors.black[100],
        textHeaderColor: "#469ab6",
        textDefaultColor: colors.purple[100],
        mainColor: "#469ab6",
        textSecondaryColor: colors.purple[100],
        borderColor: "rgba(122, 146, 165, 0.1)",
      }}
      style={{
        borderRadius: 20,
        flex: 1,
      }}
    />
  );
};
//https://www.npmjs.com/package/react-native-calendar-strip
//https://www.youtube.com/watch?v=X3qdu6JuLxs&t=28s
//https://www.npmjs.com/package/react-native-calendar-timetable/v/0.4.8
