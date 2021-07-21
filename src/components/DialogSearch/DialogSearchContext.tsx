import { createContext } from "react";

export interface DialogSearchContextValue {
  show: () => void;
  hide: () => void;
}

const DialogSearchContext = createContext<DialogSearchContextValue>({
  show: () => {},
  hide: () => {},
});

export default DialogSearchContext;
