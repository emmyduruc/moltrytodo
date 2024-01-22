import { observer } from "mobx-react-lite";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import { SubmitButton } from "../../component/Button/SubmitButton";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import colors from "../../utils/colors";

export const TaskReminder = observer(() => {
  const store = useStorage().primaryUI;

  return (
    <ModalWrapper
      isVisible={store.isTimePickerVisible}
      onBackdropPress={() => store.toggleTimePicker(false)}
      modalHeaderText={translate("set_reminder")}
      subHeaderText={translate(
        "set_reminder_subheader_hint_helps_you_to_be_notified_when_your_task_is_due"
      )}
    >
      <View className="flex-col justify-between grow">
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"datetime"}
          display="spinner"
          onChange={(date) => {
            store.setTaskData({
              ...store.taskData,
              reminder: date.nativeEvent.timestamp,
            });
          }}
          textColor={colors.purple[100]}
          style={{
            height: "70%",
          }}
        />
        <SubmitButton
          className="mb-8"
          onPress={() => {
            store.toggleTimePicker(false);
          }}
        >
          {translate("choose_time")}
        </SubmitButton>
      </View>
    </ModalWrapper>
  );
});
