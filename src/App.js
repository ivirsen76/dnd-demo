import DndWithHandle from "./DndWithHandle.js";
import DndWithTouch from "./DndWithTouch.js";
import './index.css';

function App() {
    return (
        <div style={{ display: "flex", width: '100%' }}>
            <div style={{ flexGrow: 1, flexBasis: 0, padding: '1em'}} >
                <p>With touch</p>
                <DndWithTouch />
            </div>
            <div style={{ flexGrow: 1, flexBasis: 0, padding: '1em'}} >
                <p>With handle</p>
                <DndWithHandle />
            </div>
        </div>
    );
}

export default App;
