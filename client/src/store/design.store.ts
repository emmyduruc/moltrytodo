import { makeAutoObservable } from "mobx";
import { IParentStore } from ".";

export type IPrimaryUiStore = ReturnType<typeof createPrimaryUIStore>;

export const createPrimaryUIStore = (parent: IParentStore) => {
  const store = makeAutoObservable({
    toggleCreateTaskModal: () => {},
  });

  return store;
};
