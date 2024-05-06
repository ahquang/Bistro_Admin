import { RouterProvider } from "react-router-dom";
import { router } from "../src/utils/router";
import { AuthContext } from "./context/AuthContext";
import Layout from "./components/Layout";

function App() {
  return (
    <AuthContext>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthContext>
  );
}

export default App;
