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

export const CalenderPicker = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
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
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 items-center">
          <View className="w-full justify-start">
            <Text className="text-black">Select Date</Text>
            <TouchableOpacity
              className="border border-black h-12 items-center rounded-md flex-row justify-center"
              onPress={handleOnPressStartDate}
            >
              <Text className="text-black">{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Create modal for date picker */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openStartDatePicker}
        >
          <View className="flex-1 justify-center items-center">
            <View className="w-11/12 rounded-2xl p-6 bg-black">
              <DatePicker
                mode="calendar"
                minimumDate={startDate}
                selected={startedDate}
                onDateChanged={handleChangeStartDate}
                onSelectedChange={(date) => setSelectedStartDate(date)}
                options={{
                  backgroundColor: "#080516",
                  textHeaderColor: "#469ab6",
                  textDefaultColor: "#FFFFFF",
                  selectedTextColor: "#FFF",
                  mainColor: "#469ab6",
                  textSecondaryColor: "#FFFFFF",
                  borderColor: "rgba(122, 146, 165, 0.1)",
                }}
              />

              <TouchableOpacity onPress={handleOnPressStartDate}>
                <Text className="text-center">{translate("cancel")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
