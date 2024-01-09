import { Image, View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { Text } from "../../component/Text/Text";
import { translate } from "../../services/translation.service";

export const HomeScreen = () => {
  return (
    <GradientLayout>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("../../../assets/home.png")}
          style={{ width: 200, height: 200 }}
        />

        <Text className="text-white text-base font-medium">
          {translate(
            "you_can_create_your_first_task_by_clicking_on_the_plus_button_on_the_bottom_right_corner_of_the_screen"
          )}
        </Text>
      </View>
    </GradientLayout>
  );
};
