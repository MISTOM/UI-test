import Dashboard from './pages/Dashboard'
import Market from './pages/Market'
import Rates from './pages/Rates'
import Blog from './pages/Blog'

function Router() {
  const path = window.location.pathname
  if (path === '/market') return <Market />
  if (path === '/rates') return <Rates />
  if (path === '/blog') return <Blog />
  return <Dashboard />
}

export function App() {
  return <Router />
}

export default App
