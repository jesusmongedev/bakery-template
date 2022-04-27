import { Route, Routes } from 'react-router-dom'
import StyleGuide from './pages/StyleGuide'
import Home from './pages/Home'
import AppContent from './content/app-content'
import './scss/base.scss'

const ROUTES = {
  home: '/',
  styleguide: '/styleguide',
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path={ROUTES.styleguide}
          element={<StyleGuide content={AppContent} />}
        />
        <Route path={ROUTES.home} element={<Home content={AppContent} />} />
      </Routes>
    </div>
  )
}

export default App
