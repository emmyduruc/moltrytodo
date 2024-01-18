import { makeAutoObservable, runInAction } from "mobx";
import { IParentStore } from ".";

export type IPrimaryUiStore = ReturnType<typeof createPrimaryUIStore>;

export const createPrimaryUIStore = (parent: IParentStore) => {
  const store = makeAutoObservable({
    //   observables
    isModalOpen: false,
    isCalendarOpen: false,
    isPriorityChosen: false,

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
  });

  return store;
};
