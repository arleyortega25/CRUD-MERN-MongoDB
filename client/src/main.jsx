import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContext } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <TaskProvider>
          <App />
        </TaskProvider>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
