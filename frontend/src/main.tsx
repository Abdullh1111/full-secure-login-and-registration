import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider></Provider>
  </React.StrictMode>,
)
