import React from "react";
import { Text } from "../../component/Text/Text";
import { GestureResponderEvent } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import {
  RegisterValues,
  registerValidationSchema,
} from "../../validators/validation";
import { translate } from "../../services/translation.service";
import { SubmitButton } from "../../component/Button/SubmitButton";
import { KeyboardAvoidingView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { NonAuthStackParamList } from "src/stack/NonAuth";

interface RegisterScreenProps extends NavigationProp<NonAuthStackParamList> {
  navigation: NavigationProp<NonAuthStackParamList>;
}

export const Register = ({ navigation }: RegisterScreenProps) => {
  const formik = useFormik<RegisterValues>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    validationSchema: registerValidationSchema,
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
          "register_with_us_to_build_your_own_routine_manage_your_tasks_and_be_more_productive"
        )}
      </Text>
      <KeyboardAvoidingView
        className="flex-1"
        keyboardVerticalOffset={60}
        behavior={"padding"}
      >
        <Input
          titleLabel={translate("username")}
          name={"username"}
          autoFocus={true}
          formikFieldName={"username"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />

        <Input
          titleLabel={translate("email")}
          name={"email"}
          formikFieldName={"email"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />

        <Input
          titleLabel={translate("password")}
          name={"password"}
          formikFieldName={"password"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />
        <Input
          titleLabel={translate("confirmPassword")}
          name={"confirmPassword"}
          formikFieldName={"confirmPassword"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />
        <SubmitButton
          disabled={
            !formik.isValid ||
            !formik.values.email ||
            !formik.values.password ||
            !formik.values.confirmPassword ||
            !formik.values.username
          }
          onPress={onSubmitPress}
        >
          {translate("register")}
        </SubmitButton>
      </KeyboardAvoidingView>
    </GradientLayout>
  );
};
