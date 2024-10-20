import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider}  from "@tanstack/react-query";
import {BrowserRouter} from 'react-router-dom';
import AuthState from './context/index.jsx';


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AuthState>
        <App />
        </AuthState>
    
    </QueryClientProvider>
    </BrowserRouter>
    
)
