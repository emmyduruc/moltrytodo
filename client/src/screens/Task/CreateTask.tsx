import { Modal, View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { Text } from "../../component/Text/Text";
import { translate } from "../../services/translation.service";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import { TaskValues, taskValidationSchema } from "../../validators/validation";
import { useState } from "react";

export const CreateTask = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const formik = useFormik<TaskValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit(values, formikHelpers) {},
  });

  const onChange = (text: string) => {
    console.log("onchange text", text);
  };

  return (
    <GradientLayout>
      <View className="flex-1 items-center justify-center">
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="flex-1 items-center bg-red-500 justify-center">
            <Input
              titleLabel={translate("title")}
              onChange={onChange}
              name={"title"}
              formikFieldName={"title"}
              autoFocus={true}
              formik={formik}
              className="flex-1 bg-slate-100"
              validationSchema={taskValidationSchema}
            />

            <Input
              titleLabel={translate("description")}
              onChange={onChange}
              name={"description"}
              formikFieldName={"description"}
              formik={formik}
              validationSchema={taskValidationSchema}
            />
          </View>
        </Modal>
      </View>
    </GradientLayout>
  );
};
