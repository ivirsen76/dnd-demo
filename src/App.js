import DndWithHandle from "./DndWithHandle.js";
import DndWithTouch from "./DndWithTouch.js";
import './index.css';

function App() {
    return (
        <div className="wrapper">
            <div>
                <div className="description">With touch</div>
                <div className="list"><DndWithTouch /></div>
            </div>
            <div>
                <div className="description">With handle</div>
                <div className="list"><DndWithHandle /></div>
            </div>
        </div>
    );
}

export default App;
