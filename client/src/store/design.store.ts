import { makeAutoObservable, runInAction } from "mobx";
import { IParentStore } from ".";
import { ITask } from "../models/task.model";

export type IPrimaryUiStore = ReturnType<typeof createPrimaryUIStore>;

export const createPrimaryUIStore = (parent: IParentStore) => {
  const store = makeAutoObservable({
    //   observables
    isModalOpen: false,
    isCalendarOpen: false,
    isPriorityChosen: false,
    isCategoryChosen: false,
    isTimePickerVisible: false,
    taskData: null as null | Partial<ITask>,

    //   Actions
    toggleModal: (state: boolean) => {
      runInAction(() => {
        store.isModalOpen = state;
      });
    },
    toggleCalendar: (state: boolean) => {
      runInAction(() => {
        store.isCalendarOpen = state;
      });
    },
    togglePriority: (state: boolean) => {
      runInAction(() => {
        store.isPriorityChosen = state;
      });
    },

    toggleCategory: (state: boolean) => {
      runInAction(() => {
        store.isCategoryChosen = state;
      });
    },
    toggleTimePicker: (state: boolean) => {
      runInAction(() => {
        store.isTimePickerVisible = state;
      });
    },
    setTaskData: (task: Partial<ITask>) => {
      runInAction(() => {
        store.taskData = task;
      });
    },
  });

  return store;
};
