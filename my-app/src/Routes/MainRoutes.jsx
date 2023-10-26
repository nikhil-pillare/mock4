import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Quiz } from "../pages/Quiz";
import { Result } from "../pages/Result";

export const MainRoutes=()=>{
    return(
<Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
    </Routes>

    )
    
}