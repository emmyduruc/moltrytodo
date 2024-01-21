import { observer } from "mobx-react-lite";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { Icon } from "../../component/Icons/Icon";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { View } from "react-native";

export const Calender = observer(() => {
  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(3, "days"), // total 4 days enabled
    },
  ];
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
          style={{ height: 120, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: "white" }}
          calendarColor={"#7743CE"}
          dateNumberStyle={{ color: "white" }}
          dateNameStyle={{ color: "white" }}
          highlightDateNumberStyle={{ color: "yellow" }}
          highlightDateNameStyle={{ color: "yellow" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          datesWhitelist={datesWhitelist}
          datesBlacklist={datesBlacklist}
          iconLeft={require("../../../assets/img/left-arrow-black.png")}
          iconRight={require("../../../assets/img/right-arrow-black.png")}
          iconStyle={{
            tintColor: "white",
          }}
          iconContainer={{ flex: 0.1 }}
        />
      </View>
    </GradientLayout>
  );
});
