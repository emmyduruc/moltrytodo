import { useNavigation } from "@react-navigation/native";
import { Camera } from "../component/Icons/Camera";
import { Flash } from "../component/Icons/Flash";
import { Icon } from "../component/Icons/Icon";
import { InfoCircle } from "../component/Icons/InfoCircle";
import { Logout } from "../component/Icons/Logout";
import { Menu } from "../component/Icons/Menu";
import { User } from "../component/Icons/User";
import { translate } from "../services/translation.service";
import colors from "../utils/colors";

export const profileData = (navigation) => {
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
      icon: <Icon name="key-outline" size={25} color={colors.white} />,
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

  return profileData;
};
