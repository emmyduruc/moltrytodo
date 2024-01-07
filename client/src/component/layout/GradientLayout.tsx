import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

type GradientLayoutProps = {
  children: React.ReactNode;
};

export const GradientLayout = ({ children }: GradientLayoutProps) => {
  return (
    <LinearGradient
      className="flex-1"
      colors={["#3D3A3A", "#000000", "#684998"]}
    >
      <View className="flex-1 w-11/12 justify-center self-center">
        {children}
      </View>
    </LinearGradient>
  );
};
