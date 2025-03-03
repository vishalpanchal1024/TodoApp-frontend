import { FC, ReactElement } from 'react'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

const App: FC = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover
        transition={Zoom}
      />
    </>
  )
}

export default App
