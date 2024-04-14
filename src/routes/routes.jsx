import { createBrowserRouter } from 'react-router-dom'
import App from '../App';

// Pages
import HomePage from '../pages/HomePage/index.jsx'
import TrailListPage from '../pages/TrailListPage/index.jsx'
import TrailRegisterPage from '../pages/TrailRegisterPage/index.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'cadastro-trilha',
                element: <TrailRegisterPage />,
            },
            {
                path: 'lista-trilhas',
                element: <TrailListPage />,
            },
        ]

    }
]);

export default router;