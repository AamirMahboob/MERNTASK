// // app/providers.js
// "use client";
// import { Provider } from 'react-redux';
// import { store } from './store/store';

// export function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

// app/providers.js
"use client";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Loading from './components/Loading'; // Create a simple loading component

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}