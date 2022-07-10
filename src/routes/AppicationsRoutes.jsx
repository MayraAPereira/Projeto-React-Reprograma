import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portifolio/Portifolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="portifolio" element={<Portifolio />} />
                <Route path="comentario" element={<Comentarios />} />
                <Route path="/" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}
export default ApplicationRoutes