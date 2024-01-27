import { observer } from "mobx-react-lite";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { Icon } from "../../component/Icons/Icon";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { Touchable, TouchableOpacity, View } from "react-native";
import { useStorage } from "../../store";
import { translate } from "../../services/translation.service";
import React from "react";
import { Text } from "../../component/Text/Text";
import {
  renderCategoryIcon,
  renderPriorityIcon,
} from "../../constants/createTask.constant";
import { Flag } from "../../component/Icons/Flag";
import { CategoryPriorityView } from "./CategoryPriorityVIew";
import { ICategory, IPriority } from "../../models/task.model";

export const Calender = observer(({ navigation }) => {
  const store = useStorage().primaryUI;
  const taskData = store.taskData;
  const [activeTodayButton, setActiveTodayButton] = React.useState(true);
  const [activeCompletedButton, setActiveCompletedButton] =
    React.useState(false);
  console.log("taskData...", taskData);
  const dueDate = taskData?.due_date
    ? moment(taskData.due_date, "YYYY/MM/DD")
    : null;
  const category = renderCategoryIcon(taskData?.category ?? "") as ICategory;
  const priority = renderPriorityIcon(taskData?.priority ?? 0) as IPriority;
  // let datesWhitelist = [
  //   {
  //     start: moment(),
  //     end: moment().add(3, "days"), // total 4 days enabled
  //   },
  // ];
  let datesBlacklist = [moment().add(1, "days")];

  return (
    <GradientLayout className="w-full">
      <View className="flex-1">
        <CalendarStrip
          scrollable
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white",
          }}
          selectedDate={dueDate ? dueDate : moment()}
          style={{ height: 120, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: "white" }}
          calendarColor={"#7743CE"}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          //datesWhitelist={datesWhitelist}
          //   datesBlacklist={datesBlacklist}
          iconLeft={require("../../../assets/img/left-arrow-black.png")}
          iconRight={require("../../../assets/img/right-arrow-black.png")}
          iconStyle={{
            tintColor: "white",
          }}
          iconContainer={{ flex: 0.1 }}
        />
        <View className="bg-black-100 pt-4 pb-4 flex-row justify-around items-center">
          <TouchableOpacity
            onPress={() => {
              setActiveTodayButton(!activeTodayButton);
              setActiveCompletedButton(!activeCompletedButton);
            }}
            className={`w-[40%] p-4 rounded-xl ${
              activeTodayButton
                ? "bg-purple-100"
                : "border border-white bg-transparent"
            }`}
          >
            <Text className="text-white text-base text-center">
              {translate("today")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveCompletedButton(!activeCompletedButton);
              setActiveTodayButton(!activeTodayButton);
            }}
            className={`p-4 w-[40%] rounded-xl ${
              activeCompletedButton
                ? "bg-purple-100"
                : "border border-white bg-transparent"
            }`}
          >
            <Text className="text-white text-base text-center">
              {translate("completed")}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditAppointment");
          }}
          className="flex-row items-center justify-between pl-3 pr-3 bg-black-100 my-2 rounded-xl"
        >
          <View
            className={`h-4 w-4 rounded-full ${
              activeCompletedButton ? "bg-green" : "bg-red-500"
            }`}
          />
          <View className="flex-col">
            <Text className="text-white text-base text-start">
              {taskData?.title}
            </Text>
            <Text className="text-white text-base text-start">
              {taskData?.due_date}
            </Text>
          </View>

          <CategoryPriorityView category={category} priority={priority} />
        </TouchableOpacity>
      </View>
    </GradientLayout>
  );
});
