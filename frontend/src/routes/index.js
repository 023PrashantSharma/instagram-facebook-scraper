import { Routes, Route } from "react-router-dom"
import Instagram from "../pages/account/instagram"
import Facebook from "../pages/account/facebook"
function App() {
    return (
        <Routes>
            <Route path={`/`} excat={true} element={<Instagram />} />
            <Route path={`/facebook`} excat={true} element={<Facebook />} />
            <Route path={`*`} excat={true} element={<div >Not found</div>} />
        </Routes>
    );
}

export default App;
