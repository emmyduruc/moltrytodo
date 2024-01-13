import { createContext, useContext } from "react";
import { createPrimaryUIStore, IPrimaryUiStore } from "./design.store";

export interface IParentStore {
  primaryUI: IPrimaryUiStore;
}

export const createParentStore = (): IParentStore => {
  const store: any = {};

  store.primaryUI = createPrimaryUIStore(store);

  return store;
};

export const parentStore = createParentStore();
export const parentStoreContext = createContext<IParentStore>(parentStore);
export const ParentStoreProvider = parentStoreContext.Provider;
export const useParentStore = () => useContext(parentStoreContext);
