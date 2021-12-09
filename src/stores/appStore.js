import create from 'zustand';
import { devtools } from 'zustand/middleware';

let appStore = (set) => (
  {
    blockUI: false,
    toggleBlockUI: () => 
      set( state => ({
        blockUI: !state.blockUI,
    })),

  }
);

appStore = devtools(appStore);
const useAppStore = create(appStore);

export default useAppStore;

