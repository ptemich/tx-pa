import { Routes, Route } from "react-router-dom";
import IntroPage from "../pages/IntroPage";
import TreeStructurePage from "../pages/TreeStructurePage";
import { ROOT, TREE_STRUCTURE } from "./ApplicationRoutes";

function Routing() {
    return (
        <Routes>            
            <Route path={ROOT} element={<IntroPage />} />
            <Route path={TREE_STRUCTURE} element={<TreeStructurePage />} />
        </Routes>
    )
}

export default Routing;