import "./App.css";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/operations";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Form } from "./pages/Form";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(getUsers());
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage method={setIsFormShown} clickHandler={clickHandler} />
          }
        />
        <Route path="/form" element={<Form method={isFormShown} />} />
      </Routes>
    </>
  );
}

export default App;
