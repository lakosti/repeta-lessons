import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import App from "./components/INFO/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux-async/store";

// import { Provider } from "react-redux";
// import { store, persistor } from "./redux-toolkit/store";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate persistor={persistor}> */}
    <Provider store={store}>
      {/* <App /> */}
      <App />
    </Provider>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
