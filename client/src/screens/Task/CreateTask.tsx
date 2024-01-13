import { View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { translate } from "../../services/translation.service";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import { TaskValues, taskValidationSchema } from "../../validators/validation";
import { useState } from "react";
import Modal from "react-native-modal";

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
        <View className="h-20 w-[80%] items-center justify-center">
          <Modal
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn={"slideInUp"}
          >
            <View className="p-4 bg-purple-100 rounded-2xl">
              <Input
                titleLabel={translate("title")}
                onChange={onChange}
                name={"title"}
                formikFieldName={"title"}
                autoFocus={true}
                formik={formik}
                className="flex-1"
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
      </View>
    </GradientLayout>
  );
};
