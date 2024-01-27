import { Text } from "../../component/Text/Text";
import { observer } from "mobx-react-lite";
import { ICategory, ITask } from "../../models/task.model";
import { TouchableOpacity } from "react-native";

type CategoryViewProps = {
  category?: ICategory;
  taskData: Partial<ITask> | null;
};

export const CategoryView = observer(
  ({ category, taskData }: CategoryViewProps) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: category?.colors[0],
        }}
        className={`p-2 items-center flex-row justify-around rounded-xl`}
      >
        {category?.icon}
        <Text className="text-black ml-2 text-base">{taskData?.category}</Text>
      </TouchableOpacity>
    );
  }
);
