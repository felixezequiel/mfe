import './App.css'
import { useRoutes } from 'react-router-dom'
import { CoreRoutes } from './routes/index.tsx'

function MfeZustand() {
  const routes = useRoutes(CoreRoutes);

  return routes;
}

export default MfeZustand;
