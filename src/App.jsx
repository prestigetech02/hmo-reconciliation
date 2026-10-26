import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './Routes/Route'
import Layoutselector from './Layouts/Layoutselector';
import Errorplace from './components/Errorplace';
import Protected from './auth/Protected';
import Blanklayout from './Layouts/Blanklayout';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import ResetPasswordForm from './pages/ResetpasswordForm';


function App() {
  const router = createBrowserRouter([
    {
    
      element: <Blanklayout />,
      errorElement: <Errorplace />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/forgot-password", element: <Forgotpassword />},
        { path: "/reset-password", element: <ResetPasswordForm />}
      ],
  
    },
    {
      path: "/",
      element: <Layoutselector />,
      errorElement: <Errorplace />,
      children: routes.map((rout) => ({
        path: rout.path === "/" ? undefined : rout.path,
        index: rout.path === '/',
        element: (
          <Protected 
            component={rout.component}
            isProtected={rout.isProtected}
            role={rout.role}
          />
        )
      }))

    }

  ])
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
