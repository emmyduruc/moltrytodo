import { GradientLayout } from "../../component/layout/GradientLayout";
import { Text, View } from "react-native";

export const AuthScreen = () => {
  return (
    <GradientLayout>
      <View className="flex-1 justify-center">
        <Text className="text-red-500">AuthScreen</Text>
      </View>
    </GradientLayout>
  );
};
