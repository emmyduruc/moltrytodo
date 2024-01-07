import { Text } from "../../component/Text/Text";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { View } from "react-native";
import { SubmitButton } from "../../component/Button/SubmitButton";

export const AuthScreen = () => {
  return (
    <GradientLayout>
      <View className="flex-1 justify-center">
        <View className="">
          <Text
            className="
        text-3xl
        font-semibold
        font-Montserrat-Bold
        "
          >
            Welcome to AdmoriTodo
          </Text>

          <Text className="mt-6">
            Please login to your account or create new account to continue
          </Text>
        </View>
        <View className="mt-8">
          <SubmitButton className="bg-purple-100">Login</SubmitButton>
          <SubmitButton className="bg-purple-100">Create account</SubmitButton>
        </View>
      </View>
    </GradientLayout>
  );
};
