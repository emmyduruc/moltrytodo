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

export const Register = () => {
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
  };

  return (
    <GradientLayout>
      <Text className="text-3xl text-center my-2 font-medium font-montserrat">
        {translate("register")}
      </Text>
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
          onChange={onChange}
          name={"username"}
          formikFieldName={"username"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />

        <Input
          titleLabel={translate("email")}
          onChange={onChange}
          name={"email"}
          formikFieldName={"email"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />

        <Input
          titleLabel={translate("password")}
          onChange={onChange}
          name={"password"}
          formikFieldName={"password"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />
        <Input
          titleLabel={translate("confirmPassword")}
          onChange={onChange}
          name={"confirmPassword"}
          formikFieldName={"confirmPassword"}
          formik={formik}
          validationSchema={registerValidationSchema}
        />
        <SubmitButton disabled={!formik.isValid} onPress={onSubmitPress}>
          {translate("register")}
        </SubmitButton>
      </KeyboardAvoidingView>
    </GradientLayout>
  );
};
