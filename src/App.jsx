import "./App.css";
import { ElementInspector } from "react-element-prompt-inspector";
import MoveInServiceApp from './components/MoveInServiceApp';

function App() {
  return (
    <div className="slds-scope react-app-container">
      {import.meta.env.DEV && <ElementInspector />}
      <div className="slds-p-around_medium">
        <MoveInServiceApp />
      </div>
    </div>
  );
}

export default App;
