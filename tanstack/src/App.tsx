import './App.css'
import { useRoutes } from 'react-router-dom'
import { CoreRoutes } from './routes'

function App() {
  const routes = useRoutes(CoreRoutes);
  return routes;
}

export default App;
