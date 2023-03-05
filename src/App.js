import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import {Provider} from "react-redux"
import store from "./Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
      
    </div>
  );
}

export default App;
