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
import { CalenderPicker } from "../../component/Pickers/CalenderPicker";
import { SubmitButton } from "../../component/Button/SubmitButton";
import { VideoCamera } from "../../component/Icons/VideoCamera";
import { Megaphone } from "../../component/Icons/Megaphone";
import { Add } from "../../component/Icons/Add";
import { Console } from "../../component/Icons/Console";
import { HeartBeat } from "../../component/Icons/Heartbeat";
import { Mortalboard } from "../../component/Icons/Mortarboard";
import { Music } from "../../component/Icons/Music";
import { Bread } from "../../component/Icons/Bread";
import { Design } from "../../component/Icons/Design";
import colors from "../../utils/colors";

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
      onPress: () => {
        store.toggleCalendar(true);
      },
    },
    {
      id: 4,
      title: translate("set_category"),
      name: "tag",
      onPress: () => {
        store.toggleCategory(true);
      },
    },
    {
      id: 5,
      title: translate("set_priority"),
      name: "flag",
      onPress: () => {
        store.togglePriority(true);
      },
    },
  ];
  const priorityData = [
    {
      level: 1,
      color: "red",
    },
    {
      level: 2,
      color: "yellow",
    },
    {
      level: 3,
      color: "green",
    },
    {
      level: 4,
      color: "blue",
    },
    {
      level: 5,
      color: "purple",
    },
    {
      level: 6,
      color: "pink",
    },
    {
      level: 7,
      color: "orange",
    },
    {
      level: 8,
      color: "gray",
    },
    {
      level: 9,
      color: "#D4AF37",
    },
    {
      level: 10,
      color: "white",
    },
  ];

  const categoryData = [
    {
      name: "Work",
      icon: <VideoCamera />,
      colors: [colors.green[600]],
    },
    {
      name: "Social",
      icon: <Megaphone />,
      colors: [colors.pink[300]],
    },
    {
      name: "Health",
      icon: <HeartBeat />,
      colors: [colors.green[900]],
    },
    {
      name: "Education",
      icon: <Mortalboard />,
      colors: [colors.purple[400]],
    },
    {
      name: "Music",
      icon: <Music />,
      colors: [colors.pink[400]],
    },
    {
      name: "Food",
      icon: <Bread />,
      colors: [colors.green[600]],
    },
    {
      name: "Design",
      icon: <Design />,
      colors: [colors.green[800]],
    },
    {
      name: "Create new",
      icon: <Add />,
      colors: [colors.green[1000]],
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
                <SubmitButton className="mb-8" onPress={() => onSubmitPress()}>
                  {translate("save")}
                </SubmitButton>
              </>
            </ModalWrapper>

            <ModalWrapper
              isVisible={store.isCalendarOpen}
              onBackdropPress={() => store.toggleCalendar(false)}
              modalHeaderText={translate("set_due_date")}
            >
              <CalenderPicker />

              <SubmitButton
                className="mb-8"
                onPress={() => store.toggleCalendar(false)}
              >
                {translate("save")}
              </SubmitButton>
            </ModalWrapper>

            <ModalWrapper
              isVisible={store.isPriorityChosen}
              onBackdropPress={() => store.togglePriority(false)}
              modalHeaderText={translate("set_priority")}
              subHeaderText={translate(
                "set_priority_hint_helps_you_to_layout_your_tasks_according_to_their_importance"
              )}
            >
              <View className="flex-col justify-around grow">
                <View className="flex-row justify-between flex-wrap w-full grow">
                  {priorityData.map((item, index) => (
                    <TouchableOpacity key={index} className="grow flex">
                      <View className="h-20 bg-black w-20 m-2 items-center justify-center rounded-full mx-1">
                        <Flag fill={item.color} />
                        <Text className="text-white text-xs">{item.level}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <SubmitButton
                  className="mb-8"
                  onPress={() => store.togglePriority(false)}
                >
                  {translate("save")}
                </SubmitButton>
              </View>
            </ModalWrapper>

            <ModalWrapper
              isVisible={store.isCategoryChosen}
              onBackdropPress={() => store.toggleCategory(false)}
              modalHeaderText={translate("set_category")}
              subHeaderText={translate(
                "set_category_hint_helps_you_to_layout_your_tasks_according_to_their_importance"
              )}
            >
              <View className="flex-col justify-around grow">
                <View className="flex-row justify-between flex-wrap w-full grow">
                  {categoryData.map((item, index) => (
                    <TouchableOpacity key={index} className="grow flex">
                      <View
                        className="h-20 w-20 m-2 my-4 items-center justify-center rounded-full mx-1"
                        style={{ backgroundColor: item.colors[0] }}
                      >
                        {item.icon}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <SubmitButton
                  className="mb-8"
                  onPress={() => store.toggleCategory(false)}
                >
                  {translate("save")}
                </SubmitButton>
              </View>
            </ModalWrapper>
          </View>
        </View>
      </View>
    </GradientLayout>
  );
});
