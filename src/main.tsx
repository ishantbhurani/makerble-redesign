import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FeedProvider from './context/FeedContext'
import './index.css'
import Root from './layouts/Root'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeedProvider>
      <RouterProvider router={router} />
    </FeedProvider>
  </StrictMode>,
)
