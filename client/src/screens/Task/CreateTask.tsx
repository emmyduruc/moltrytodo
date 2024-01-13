import { TouchableOpacity, View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { translate } from "../../services/translation.service";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import { TaskValues, taskValidationSchema } from "../../validators/validation";
import Modal from "react-native-modal";
import { useStorage } from "../../store";
import { observer } from "mobx-react-lite";
import { EventType } from "../../models/input.model";
import { Timer } from "../../component/Icons/Timer";
import { Send } from "../../component/Icons/Send";
import { Tag } from "../../component/Icons/Tag";
import { Flag } from "../../component/Icons/Flag";

export const CreateTask = observer(() => {
  const store = useStorage().primaryUI;
  const formik = useFormik<TaskValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit(values, formikHelpers) {},
  });

  const onChange = (event: EventType) => {
    console.log("onchange text", event);
  };

  const onSubmitPress = () => {
    formik.handleSubmit();
    console.log("formik", formik.values);
    if (formik.isValid) {
      console.log("valid");
      store.toggleModal(true);
    }
  };

  return (
    <GradientLayout>
      <View className="flex-1 items-center justify-center">
        <View className="w-[80%] items-center justify-center">
          <Modal
            isVisible={store.isModalOpen}
            onBackdropPress={() => store.toggleModal(false)}
            animationIn={"slideInUp"}
          >
            <View className="p-4 h-[26%] bg-black-100 rounded-2xl">
              <Input
                titleLabel={translate("title")}
                name={"title"}
                formikFieldName={"title"}
                autoFocus={true}
                formik={formik}
                className="flex-1"
                validationSchema={taskValidationSchema}
              />

              <Input
                titleLabel={translate("description")}
                name={"description"}
                formikFieldName={"description"}
                formik={formik}
                validationSchema={taskValidationSchema}
              />
              <View className="flex-1 pt-4 flex-row justify-between">
                <View className="flex-row w-[40%] justify-between">
                  <Timer />
                  <Tag />
                  <Flag />
                </View>
                <TouchableOpacity onPress={onSubmitPress} className="">
                  <Send />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </GradientLayout>
  );
});
