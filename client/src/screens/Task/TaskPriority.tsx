import { SubmitButton } from "../../component/Button/SubmitButton";
import { Flag } from "../../component/Icons/Flag";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";
import { Text } from "../../component/Text/Text";
import { priorityData } from "../../constants/createTask.constant";
import { observer } from "mobx-react-lite";
import { TouchableOpacity, View } from "react-native";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";

export const TaskPriority = observer(() => {
  const store = useStorage().primaryUI;

  return (
    <ModalWrapper
      isVisible={store.isPriorityChosen}
      onBackdropPress={() => store.togglePriority(false)}
      modalHeaderText={translate("set_priority")}
      subHeaderText={translate(
        "set_priority_hint_helps_you_to_layout_your_tasks_according_to_their_importance"
      )}
    >
      <View className="flex-col justify-around grow">
        <View className="flex-row justify-between flex-wrap w-full grow">
          {priorityData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                store.setTaskData({
                  ...store.taskData,
                  priority: item.level,
                })
              }
              className="grow flex"
            >
              <View
                className="h-20 w-20 m-2 my-4 items-center justify-center rounded-full mx-1"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <Flag fill={item.color} />
                <Text className="text-black text-base">{item.level}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <SubmitButton
          className="mb-8"
          onPress={() => {
            store.togglePriority(false);
          }}
        >
          {translate("save")}
        </SubmitButton>
      </View>
    </ModalWrapper>
  );
});
