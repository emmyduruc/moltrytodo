import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputProps,
  View,
} from "react-native";
import { FormikProps } from "formik";
import { Text } from "../Text/Text";

export interface CustomInputProps<T> extends TextInputProps {
  placeHolder?: string;
  titleLabel?: string;
  marginBottom?: number;
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  name: keyof T;
  hidePassword?: boolean;
  forgotPassword?: boolean;
  formikFieldName: keyof T;
  managePasswordVisibility?: () => void;
  validationSchema: any;
  formik: FormikProps<T>;
  isPhonenumberInput?: boolean;
  keyboardType?: any;
  label?: string;
}

export const Input = <T extends {}>({
  placeHolder,
  onChange,
  titleLabel,
  name,
  label,
  formik,
  hidePassword,
  forgotPassword = false,
  keyboardType = "default",
  managePasswordVisibility,
  isPhonenumberInput = false,
  ...props
}: CustomInputProps<T> & { formikFieldName: keyof T }) => {
  const { values, handleChange, errors, touched } = formik;

  return (
    <View className="flex">
      <View className="flex justify-start mb-1 items-start">
        <Text className="text-sm text-start justify-start items-start text-gray-400">
          {titleLabel}
        </Text>
      </View>
      <View className="border border-gray-100 h-12 items-center rounded-md flex-row justify-center">
        <TextInput
          onChangeText={handleChange(name)}
          value={values[name]}
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
          selectionColor={"#fff"}
          className="flex-1 pl-2 text-white text-base"
          {...props}
        />
      </View>
      {errors?.[name] && touched?.[name] && (
        <Text className="text-red-500 text-sm">{errors?.[name]}</Text>
      )}
    </View>
  );
};
