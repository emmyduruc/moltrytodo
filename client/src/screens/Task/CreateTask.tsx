import { FlatList, TouchableOpacity, View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import { observer } from "mobx-react-lite";
import { Text } from "../../component/Text/Text";
import { Icon } from "../../component/Icons/Icon";
import { TaskDueDate } from "./TaskDueDate";
import { TaskTitle } from "./TaskTitle";
import { TaskPriority } from "./TaskPriority";
import { TaskCategory } from "./TaskCategory";
import { TaskReminder } from "./TaskReminder";

export const CreateTask = observer(() => {
  const store = useStorage().primaryUI;

  console.log("store.taskData.....", store.taskData);

  const createTaskUiRenderData = [
    {
      id: 1,
      title: translate("set_title_and_description"),
      name: "title",
      onPress: () => {
        store.toggleModal(true);
      },
    },
    {
      id: 3,
      title: translate("set_due_date"),
      name: "timer",
      onPress: () => {
        store.toggleCalendar(true);
      },
    },
    {
      id: 4,
      title: translate("set_reminder"),
      name: "alarm",
      onPress: () => {
        store.toggleTimePicker(true);
      },
    },
    {
      id: 5,
      title: translate("set_category"),
      name: "tag",
      onPress: () => {
        store.toggleCategory(true);
      },
    },
    {
      id: 6,
      title: translate("set_priority"),
      name: "flag",
      onPress: () => {
        store.togglePriority(true);
      },
    },
  ];

  return (
    <GradientLayout>
      <View className="flex-1 justify-center mt-8">
        <FlatList
          data={createTaskUiRenderData}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row justify-between items-center p-4 border-b border-gray-300"
              onPress={item.onPress}
            >
              <Text>{item.title}</Text>
              <Icon color={"white"} size={35} name={"chevron-forward"} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <View className="flex-1 justify-center items-center">
              <Text className="text-3xl text-center my-2 font-medium font-montserrat">
                {translate("create_task")}
              </Text>
              <Text className="text-base text-center my-2 font-medium font-montserrat">
                {translate(
                  "create_a_task_to_build_your_own_routine_manage_your_tasks_and_be_more_productive"
                )}
              </Text>
            </View>
          }
        />

        <View className="flex-1 items-center justify-center">
          <View className="w-[80%] items-center justify-center">
            <TaskTitle />
            <TaskDueDate />
            <TaskPriority />
            <TaskCategory />
            <TaskReminder />
          </View>
        </View>
      </View>
    </GradientLayout>
  );
});
