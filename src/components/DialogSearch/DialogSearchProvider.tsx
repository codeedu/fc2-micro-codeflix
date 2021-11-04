import React from 'react';
import { useHistory } from 'react-router-dom';

import DialogSearch from 'components/DialogSearch';
import DialogSearchContext from 'components/DialogSearch/DialogSearchContext';

import useIsSmallWindow from 'hooks/useIsSmallWindow';

export interface DialogSearchProviderProps {
  children: React.ReactNode;
}

const DialogSearchProvider: React.FunctionComponent<DialogSearchProviderProps> =
  (props) => {
    const [open, setOpen] = React.useState(false);
    const history = useHistory<{ show_dialog_search?: boolean }>();
    const isSmallWindow = useIsSmallWindow();

    const actions = React.useMemo(
      () => ({
        show: () => setOpen(true),
        hide: () => setOpen(false),
      }),
      []
    );

    React.useEffect(() => {
      const { show_dialog_search, ...otherState } =
        history.location.state || {};

      if (open && !show_dialog_search) {
        history.push({
          ...history.location,
          state: {
            ...history.location.state,
            show_dialog_search: true,
          },
        });
      } else {
        if (open) return;

        history.replace({
          ...history.location,
          state: {
            ...otherState,
          },
        });
      }
    }, [history, open]);

    React.useEffect(() => {
      const unregister = history.listen((location, action) => {
        if (action === 'POP') {
          const { show_dialog_search } = location.state || {};
          show_dialog_search ? actions.show() : actions.hide();
          console.log('POP', show_dialog_search);
        }
      });

      return () => {
        unregister();
      };
    }, [actions, history]);

    React.useEffect(() => {
      if (!isSmallWindow) {
        actions.hide();
      }
    }, [actions, isSmallWindow]);

    return (
      <DialogSearchContext.Provider value={actions}>
        {props.children}
        <DialogSearch open={open} />
      </DialogSearchContext.Provider>
    );
  };

export default DialogSearchProvider;
