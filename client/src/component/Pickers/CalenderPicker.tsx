import { View } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import colors from "../../utils/colors";
import moment from "moment";
import { useStorage } from "../../store";
import { observer } from "mobx-react-lite";

export const CalenderPicker = observer(() => {
  const startDate = moment().format("YYYY/MM/DD");
  const store = useStorage().primaryUI;

  const [startedDate, setStartedDate] = useState(moment().format("YYYY/MM/DD"));

  const handleDateChange = (date: string) => {
    setStartedDate(date);

    store.setTaskData({
      ...store.taskData,
      due_date: date,
    });
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
          textHeaderColor: colors.purple[100],
          textDefaultColor: colors.purple[100],
          mainColor: colors.green[400],
          textSecondaryColor: colors.purple[100],
        }}
        style={{
          borderRadius: 20,
        }}
      />
    </View>
  );
});
