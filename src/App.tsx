import { Route, Routes } from "react-router-dom"
import ProyectPage from "./pages/proyectPage"
import IndexPage from "./pages/indexPage"
export default function App(){
  return(
    <>
      <Routes>
        <Route  path="/" element={<IndexPage></IndexPage>}></Route>
        <Route  path="/ProyectPage/:slug" element={<ProyectPage></ProyectPage>}></Route>
      </Routes>
    </>
  )
}