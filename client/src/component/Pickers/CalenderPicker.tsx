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

type CalenderPickerProps = {
  openStartDatePicker: boolean;
  setOpenStartDatePicker: (value: boolean) => void;
};

export const CalenderPicker = ({
  openStartDatePicker,
  setOpenStartDatePicker,
}: CalenderPickerProps) => {
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

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  return (
    <SafeAreaView className="flex-1">
      <DatePicker
        mode="calendar"
        minimumDate={startDate}
        selected={startedDate}
        onDateChanged={handleChangeStartDate}
        onSelectedChange={(date) => setSelectedStartDate(date)}
        options={{
          backgroundColor: "transparent",
          //textHeaderColor: "#469ab6",
          //textDefaultColor: "#FFFFFF",
          // selectedTextColor: "#FFF",
          // mainColor: "#469ab6",
          //textSecondaryColor: "#FFFFFF",
          borderColor: "rgba(122, 146, 165, 0.1)",
        }}
      />

      <TouchableOpacity onPress={handleOnPressStartDate}>
        <Text className="text-center">{translate("cancel")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
