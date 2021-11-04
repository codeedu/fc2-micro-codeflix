import React from 'react';

export interface DialogSearchContextValue {
  show: () => void;
  hide: () => void;
}

const DialogSearchContext = React.createContext<DialogSearchContextValue>({
  show: () => null,
  hide: () => null,
});

export default DialogSearchContext;
