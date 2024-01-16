import { FlatList, TouchableOpacity, View } from "react-native";
import { GradientLayout } from "../../component/Layout/GradientLayout";
import { translate } from "../../services/translation.service";
import { Input } from "../../component/Inputs/TextInput";
import { useFormik } from "formik";
import { TaskValues, taskValidationSchema } from "../../validators/validation";
import Modal from "react-native-modal";
import { useStorage } from "../../store";
import { observer } from "mobx-react-lite";
import { Timer } from "../../component/Icons/Timer";
import { Send } from "../../component/Icons/Send";
import { Tag } from "../../component/Icons/Tag";
import { Flag } from "../../component/Icons/Flag";
import { Text } from "../../component/Text/Text";
import { Icon } from "../../component/Icons/Icon";
import { ModalWrapper } from "../../component/Layout/ModalWrapper";

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

  const onSubmitPress = () => {
    formik.handleSubmit();
    console.log("formik", formik.values);
    if (formik.isValid) {
      console.log("valid");
      store.toggleModal(true);
    }
  };
  const isFormValid = formik.isValid;
  const createTaskUiRenderData = [
    {
      id: 1,
      title: translate("set_title_and_description"),
      name: "title",
      onPress: () => {
        store.toggleModal(true);
      },
    },
    {
      id: 3,
      title: translate("set_due_date"),
      name: "timer",
      onPress: () => {},
    },
    {
      id: 4,
      title: translate("set_category"),
      name: "tag",
      onPress: () => {},
    },
    {
      id: 5,
      title: translate("set_priority"),
      name: "flag",
      onPress: () => {},
    },
  ];

  return (
    <GradientLayout>
      <View className="flex-1 justify-center mt-8">
        <FlatList
          data={createTaskUiRenderData}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row justify-between items-center p-4 border-b border-gray-300"
              onPress={item.onPress}
            >
              <Text>{item.title}</Text>
              <Icon color={"white"} size={35} name={"chevron-forward"} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <View className="flex-1 justify-center items-center">
              <Text className="text-3xl text-center my-2 font-medium font-montserrat">
                {translate("create_task")}
              </Text>
              <Text className="text-base text-center my-2 font-medium font-montserrat">
                {translate(
                  "create_a_task_to_build_your_own_routine_manage_your_tasks_and_be_more_productive"
                )}
              </Text>
            </View>
          }
        />

        <View className="flex-1 items-center justify-center">
          <View className="w-[80%] items-center justify-center">
            <ModalWrapper
              isVisible={store.isModalOpen}
              onBackdropPress={() => store.toggleModal(false)}
            >
              <View className="p-4 h-[65%] bg-black-100 rounded-2xl">
                <View className="flex-row justify-center items-center">
                  <Text>{translate("add_title_and_description")}</Text>
                  <TouchableOpacity
                    onPress={() => store.toggleModal(false)}
                    className="
                    absolute
                    right-0"
                  >
                    <Icon color={"white"} size={25} name={"close"} />
                  </TouchableOpacity>
                </View>

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
              </View>
            </ModalWrapper>
          </View>
        </View>
      </View>
    </GradientLayout>
  );
});
