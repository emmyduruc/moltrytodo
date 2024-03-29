import { CalenderPicker } from "../../component/Pickers/CalenderPicker";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";
import { observer } from "mobx-react-lite";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import { SubmitButton } from "../../component/Button/SubmitButton";
import React from "react";
import { View } from "react-native";

export const TaskDueDate = observer(() => {
  const store = useStorage().primaryUI;

  return (
    <ModalWrapper
      isVisible={store.isCalendarOpen}
      onBackdropPress={() => store.toggleCalendar(false)}
      modalHeaderText={translate("set_due_date")}
      subHeaderText={translate(
        "set_due_date_subheader_hint_helps_you_to_be_notified_when_your_task_is_due"
      )}
    >
      <View className="flex-col justify-between grow">
        <CalenderPicker />

        <SubmitButton
          className="mb-8"
          onPress={() => store.toggleCalendar(false)}
        >
          {translate("save")}
        </SubmitButton>
      </View>
    </ModalWrapper>
  );
});
