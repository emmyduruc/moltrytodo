import { observer } from "mobx-react-lite";
import { SubmitButton } from "../../component/Button/SubmitButton";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";
import { categoryData } from "../../constants/createTask.constant";
import { TouchableOpacity, View } from "react-native";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import { Text } from "../../component/Text/Text";

export const TaskCategory = observer(() => {
  const store = useStorage().primaryUI;

  return (
    <ModalWrapper
      isVisible={store.isCategoryChosen}
      onBackdropPress={() => store.toggleCategory(false)}
      modalHeaderText={translate("set_category")}
      subHeaderText={translate(
        "set_category_hint_helps_you_to_layout_your_tasks_according_to_their_importance"
      )}
    >
      <View className="flex-col justify-around grow">
        <View className="flex-row justify-between flex-wrap w-full grow">
          {categoryData.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                store.setTaskData({
                  ...store.taskData,
                  category: item.name,
                });
              }}
              key={index}
              className="grow flex"
            >
              <View
                className="h-20 w-20 m-2 my-4 items-center justify-center rounded-full mx-1"
                style={{ backgroundColor: item.colors[0] }}
              >
                {item.icon}
              </View>
              <Text className="text-white text-base">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <SubmitButton
          className="mb-8"
          onPress={() => store.toggleCategory(false)}
        >
          {translate("save")}
        </SubmitButton>
      </View>
    </ModalWrapper>
  );
});
