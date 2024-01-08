import Ionicons from "@expo/vector-icons/Ionicons";

interface IConName extends React.ComponentProps<typeof Ionicons> {}

export const Icon = ({ name, size, color, onPress }: IConName) => (
  <Ionicons name={name} onPress={onPress} size={size} color={color} />
);
