import { createBrowserRouter } from 'react-router-dom'
import App from '../App';

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