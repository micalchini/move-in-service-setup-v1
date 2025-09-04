import React from "react";
import * as ReactDOMClient from "react-dom/client"; // â important!
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import App from "./App";

globalThis.initReactApp = function initReactApp(element) {
  ReactDOMClient.createRoot(element).render(<App />);
};

if (import.meta.env.MODE === "development") {
  const devRoot = document.getElementById("root");
  if (devRoot) {
    globalThis.initReactApp(devRoot);
  }
}
