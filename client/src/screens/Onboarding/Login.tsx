import React from "react";
import { Text } from "../../component/Text/Text";
import { GestureResponderEvent } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import {
  LoginValues,
  loginValidationSchema,
} from "../../validators/validation";
import { translate } from "../../services/translation.service";
import { SubmitButton } from "../../component/Button/SubmitButton";
import { KeyboardAvoidingView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { NonAuthStackParamList } from "src/stack/NonAuth";

interface RegisterScreenProps extends NavigationProp<NonAuthStackParamList> {
  navigation: NavigationProp<NonAuthStackParamList>;
}

export const Login = ({ navigation }: RegisterScreenProps) => {
  const formik = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit(values, formikHelpers) {},
  });

  const onChange = (text: string) => {
    console.log("onchange text", text);
  };
  const onSubmitPress = (event: GestureResponderEvent) => {
    formik.handleSubmit();
    console.log("formik", formik.values);
    if (formik.isValid) {
      console.log("valid");
      navigation.navigate("OnBoarding");
    }
  };

  return (
    <GradientLayout>
      <Text className="text-base text-center my-2 font-medium font-montserrat">
        {translate(
          "welcome_back_to_admoritodo_login_to_your_account_to_continue_managing_your_tasks"
        )}
      </Text>
      <KeyboardAvoidingView
        className="flex-1"
        keyboardVerticalOffset={60}
        behavior={"padding"}
      >
        <Input
          titleLabel={translate("email")}
          onChange={onChange}
          name={"email"}
          formikFieldName={"email"}
          autoFocus={true}
          formik={formik}
          validationSchema={loginValidationSchema}
        />

        <Input
          titleLabel={translate("password")}
          onChange={onChange}
          name={"password"}
          formikFieldName={"password"}
          formik={formik}
          validationSchema={loginValidationSchema}
        />

        <SubmitButton disabled={!formik.isValid} onPress={onSubmitPress}>
          {translate("login")}
        </SubmitButton>
      </KeyboardAvoidingView>
    </GradientLayout>
  );
};
