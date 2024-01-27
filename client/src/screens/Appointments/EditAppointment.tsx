import { observer } from "mobx-react-lite";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "../../component/Text/Text";
import { TaskTitle } from "../../screens/Task/TaskTitle";
import { TaskDueDate } from "../../screens/Task/TaskDueDate";
import { TaskPriority } from "../../screens/Task/TaskPriority";
import { TaskReminder } from "../../screens/Task/TaskReminder";
import { TaskCategory } from "../../screens/Task/TaskCategory";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { getCreatTaskIcon } from "../../utils/getCreatTaskIcon";
import {
  renderCategoryIcon,
  renderPriorityIcon,
} from "../../constants/createTask.constant";
import { PriorityView } from "./PriorityView";
import { CategoryView } from "./CategoryView";
import { SubmitButton } from "../../component/Button/SubmitButton";

export const EditAppointment = observer(({ navigation }) => {
  const store = useStorage().primaryUI;
  const taskData = store.taskData;

  const createTaskUiRenderData = [
    {
      id: 1,
      title: translate("set_title_and_description"),
      name: "title",
      data: taskData?.title,
      onPress: () => {
        store.toggleModal(true);
      },
    },
    {
      id: 3,
      title: translate("set_due_date"),
      data: taskData?.due_date,
      name: "timer",
      onPress: () => {
        store.toggleCalendar(true);
      },
    },
    {
      id: 4,
      title: translate("set_reminder"),
      name: "alarm",
      data: taskData?.reminder,
      onPress: () => {
        store.toggleTimePicker(true);
      },
    },
    {
      id: 5,
      title: translate("set_category"),
      data: taskData?.category,
      name: "tag",
      onPress: () => {
        store.toggleCategory(true);
      },
    },
    {
      id: 6,
      title: translate("set_priority"),
      name: "flag",
      data: taskData?.priority,
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
              className="flex-row justify-between items-center border-b border-gray-300"
              onPress={item.onPress}
            >
              <View className="flex-row items-center">
                {getCreatTaskIcon(item.name)}
                <Text className="ml-2 text-lg font-semibold">
                  {item.title}:
                </Text>
              </View>

              <TouchableOpacity
                onPress={item.onPress}
                className="p-3 rounded-xl items-center flex-end"
              >
                {item.name === "tag" ? (
                  <CategoryView
                    category={renderCategoryIcon(taskData?.category ?? "")}
                    taskData={taskData}
                  />
                ) : item.name === "flag" && taskData?.priority ? (
                  <PriorityView
                    priority={renderPriorityIcon(taskData?.priority ?? 0)}
                    taskData={taskData}
                  />
                ) : (
                  <View className="bg-black-100 p-2 rounded-xl">
                    <Text>{item.data ? item.data : translate("edit")}</Text>
                  </View>
                )}
              </TouchableOpacity>
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
        <SubmitButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          {translate("submit")}
        </SubmitButton>

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
