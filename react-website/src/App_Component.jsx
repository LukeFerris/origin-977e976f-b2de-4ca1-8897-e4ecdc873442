import MainLayout_Component from "./MainLayout_Component";
import { Provider } from "react-redux";
import store from "./ReduxStore_Store";

export default function App_Component() {
  return (
    <Provider store={store}>
      <MainLayout_Component />
    </Provider>
  );
}
