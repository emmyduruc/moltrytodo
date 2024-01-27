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

export const Profile = observer(({ navigation }) => {
  const store = useStorage().primaryUI;

  const profileData = [
    {
      header: translate("settings"),
      name: translate("app_settings"),
      icon: <Icon name="settings-outline" size={25} color={colors.white} />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      header: translate("account"),
      name: translate("change_account_name"),
      icon: <User />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      name: translate("change_account_password"),
      icon: <Icon name="key-outline" size={25} />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      name: translate("change_account_image"),
      icon: <Camera />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      header: translate("app_name"),
      name: translate("about_us"),
      icon: <Menu />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      name: translate("faq"),
      icon: <InfoCircle />,
      onPress: () => navigation.navigate("AppSettings"),
    },
    {
      name: translate("help_and_support"),
      icon: <Flash />,
      onPress: () => navigation.navigate("AppSettings"),
    },

    {
      name: translate("logout"),
      icon: <Logout />,
      onPress: () => navigation.navigate("AppSettings"),
    },
  ];
  return (
    <GradientLayout>
      <FlatList
        data={profileData}
        renderItem={({ item }) => (
          <View>
            {item.header ? (
              <View>
                <Text>{item.header}</Text>
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
      />
    </GradientLayout>
  );
});
