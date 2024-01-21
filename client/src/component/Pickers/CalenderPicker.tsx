import { View } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import colors from "../../utils/colors";
import moment from "moment";

export const CalenderPicker = () => {
  const startDate = moment().format("YYYY/MM/DD");

  const [startedDate, setStartedDate] = useState(moment().format("YYYY/MM/DD"));

  const handleDateChange = (date: string) => {
    setStartedDate(date);
  };
  return (
    <View className="justify-between flex-col">
      <DatePicker
        mode="calendar"
        minimumDate={startDate}
        selected={startedDate}
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
        }}
      />
    </View>
  );
};
//https://www.npmjs.com/package/react-native-calendar-strip
//https://www.youtube.com/watch?v=X3qdu6JuLxs&t=28s
//https://www.npmjs.com/package/react-native-calendar-timetable/v/0.4.8
