import { makeAutoObservable, runInAction } from "mobx";
import { IParentStore } from ".";

export type IPrimaryUiStore = ReturnType<typeof createPrimaryUIStore>;

export const createPrimaryUIStore = (parent: IParentStore) => {
  const store = makeAutoObservable({
    //   observables
    isModalOpen: false,

    //   Actions
    toggleModal: (state: boolean) => {
      runInAction(() => {
        store.isModalOpen = state;
      });
    },
  });

  return store;
};
