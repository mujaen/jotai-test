import { Provider } from "jotai";
import Frame from "#compoments/App";

const myStore = createStore();

const Root = () => (
  <Provider store={myStore}>
    <Frame />
  </Provider>
);
