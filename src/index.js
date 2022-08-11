import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";
//stylesheet
import "./functionBased/App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </StrictMode>
);
