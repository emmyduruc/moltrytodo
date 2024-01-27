import { Camera } from "../../component/Icons/Camera";
import { Flash } from "../../component/Icons/Flash";
import { Icon } from "../../component/Icons/Icon";
import { InfoCircle } from "../../component/Icons/InfoCircle";
import { Logout } from "../../component/Icons/Logout";
import { Menu } from "../../component/Icons/Menu";
import { User } from "../../component/Icons/User";
import { observer } from "mobx-react-lite";
import { translate } from "../../services/translation.service";
import { useStorage } from "../../store";
import colors from "../../utils/colors";
import { FlatList, View } from "react-native";
import { Text } from "../../component/Text/Text";
import { SettingTab } from "../../component/Button/SettingTab";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { profileData } from "../../constants/profileData.constant";

export const Profile = observer(({ navigation }) => {
  const store = useStorage().primaryUI;

  return (
    <GradientLayout>
      <FlatList
        data={profileData(navigation)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mb-4">
            {item.header ? (
              <View>
                <Text className="text-left text-gray-300 my-2">
                  {item.header}
                </Text>
                <SettingTab
                  title={item.name}
                  icon={item.icon}
                  onPress={item.onPress}
                  rightComponent={
                    <Icon
                      name="chevron-forward-outline"
                      size={25}
                      color={colors.white}
                    />
                  }
                />
              </View>
            ) : (
              <SettingTab
                title={item.name}
                icon={item.icon}
                onPress={item.onPress}
                rightComponent={
                  <Icon
                    name="chevron-forward-outline"
                    size={25}
                    color={colors.white}
                  />
                }
              />
            )}
          </View>
        )}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={
          <View className="flex-col mt-8 items-center justify-center">
            <View className="flex-row items-center justify-center">
              <Icon
                name="person-circle-outline"
                size={200}
                color={colors.white}
              />
            </View>
            <Text className="text-white text-left">John Doe</Text>

            <View className="pt-4 pb-4 flex-1 flex-row justify-between items-center">
              <View
                className={`w-[40%] p-4 rounded-xl ${"border border-white bg-transparent"}`}
              >
                <Text className="text-red-500 text-base text-center">
                  10 Task left
                </Text>
              </View>

              <View
                className={`p-4 ml-2 w-[40%] rounded-xl ${"border border-white bg-transparent"}`}
              >
                <Text className="text-green text-base text-center">
                  1 Task done
                </Text>
              </View>
            </View>
          </View>
        }
      />
    </GradientLayout>
  );
});
