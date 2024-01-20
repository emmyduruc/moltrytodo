import { observer } from "mobx-react-lite";
import { useStorage } from "../../store";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";
import { translate } from "../../services/translation.service";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import { TaskValues, taskValidationSchema } from "../../validators/validation";
import { TouchableOpacity, View } from "react-native";
import { Send } from "../../component/Icons/Send";
import { SubmitButton } from "../../component/Button/SubmitButton";

export const TaskTitle = observer(() => {
  const store = useStorage().primaryUI;

  const formik = useFormik<TaskValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit(values, formikHelpers) {},
  });

  const onSubmitPress = () => {
    formik.handleSubmit();
    console.log("formik", formik.values);
    if (formik.isValid) {
      console.log("valid");
      store.toggleModal(true);
    }
  };
  const isFormValid = formik.isValid;

  return (
    <ModalWrapper
      isVisible={store.isModalOpen}
      onBackdropPress={() => store.toggleModal(false)}
      modalHeaderText={translate("set_title_and_description")}
    >
      <>
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
        <View className="flex-1 pt-4 flex-col justify-between">
          <View className="flex-row w-[40%] justify-between">
            <TouchableOpacity
              onPress={isFormValid ? onSubmitPress : () => {}}
              className=""
            >
              {isFormValid ? (
                <Send />
              ) : (
                <Send fill={"rgba(255, 255, 255, 0.5)"} />
              )}
            </TouchableOpacity>
          </View>
          <SubmitButton className="mb-8" onPress={() => onSubmitPress()}>
            {translate("save")}
          </SubmitButton>
        </View>
      </>
    </ModalWrapper>
  );
});
