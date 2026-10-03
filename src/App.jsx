import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/privacidade" element={<Privacidade />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
