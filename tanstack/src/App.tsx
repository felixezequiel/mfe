import './App.css'
import { useRoutes } from 'react-router-dom'
import { CoreRoutes } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const routes = useRoutes(CoreRoutes);
  return (
    <QueryClientProvider client={queryClient}>
      {routes}
    </QueryClientProvider>
  );
}

export default App;
