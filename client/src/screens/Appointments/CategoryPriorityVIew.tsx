import { Flag } from "../../component/Icons/Flag";
import { Text } from "../../component/Text/Text";
import { observer } from "mobx-react-lite";
import { ICategory, IPriority } from "../../models/task.model";
import { TouchableOpacity, View } from "react-native";

type CategoryPriorityViewProps = {
  category: ICategory;
  priority: IPriority;
};

export const CategoryPriorityView = observer(
  ({ category, priority }: CategoryPriorityViewProps) => {
    return (
      <View className="flex-row">
        <TouchableOpacity
          style={{ backgroundColor: category?.colors[0] }}
          className={`pr-3 pl-3 m-2 my-4 h-10 items-center flex-row justify-around rounded-xl mx-1 `}
        >
          {category?.icon}
          <Text className="text-black ml-2 text-base">{category?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: priority?.backgroundColor }}
          className={`pr-3 pl-3 m-2 my-4 h-10 items-center flex-row justify-around rounded-xl mx-1 `}
        >
          <Flag fill={priority?.color} />
          <Text className="text-black text-base ml-4">{priority?.level}</Text>
        </TouchableOpacity>
      </View>
    );
  }
);
