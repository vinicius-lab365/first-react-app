import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Provider
import { RouterProvider } from 'react-router-dom'

// Router
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
