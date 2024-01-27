import { IPriority, ITask } from "../../models/task.model";
import { Flag } from "../../component/Icons/Flag";
import { Text } from "../../component/Text/Text";
import { observer } from "mobx-react-lite";
import { TouchableOpacity } from "react-native";

type PriorityViewProps = {
  priority?: IPriority;
  taskData: Partial<ITask> | null;
};

export const PriorityView = observer(
  ({ priority, taskData }: PriorityViewProps) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: priority?.backgroundColor,
        }}
        className={`p-2 items-center flex-row justify-around rounded-xl`}
      >
        <Flag fill={priority?.color} />
        <Text className="text-black text-base ml-4">{taskData?.priority}</Text>
      </TouchableOpacity>
    );
  }
);
