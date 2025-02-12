import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Dashboardpage from './pages/Dashboard/DashboardPage/Dashboardpage';
import Profile from './pages/Dashboard/Profile/Profile';
import Statement from './pages/Dashboard/Statement/Statement';
import ChangePassword from './pages/Auth/Changepassword/ChangePassword';
import Domestic from './pages/Dashboard/Transfer/Domestic';
import InterBank from './pages/Dashboard/Transfer/InterBank';
import Wire from './pages/Dashboard/Transfer/Wire';
import Ticket from './pages/Dashboard/Banking/Ticket';
import Message from './pages/Dashboard/Banking/Message';
import Loan from './pages/Dashboard/Banking/Loan';
import Register from './pages/Auth/Register/Register';
import PrivateRoute from './components/PrivateRoute';

const Router = createHashRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'Register',
        element: <Register/>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute />, 
        children: [
            {
                path: '',
                element: <Dashboard />,
                children: [
                    { path: '', element: <Dashboardpage /> },
                    { path: 'my-profile', element: <Profile /> },
                    { path: 'my-statement', element: <Statement /> },
                    { path: 'change-password', element: <ChangePassword /> },
                    { path: 'Domestic-Transfer', element: <Domestic /> },
                    { path: 'Inter-Bank-transfer', element: <InterBank /> },
                    { path: 'wire-transfer', element: <Wire /> },
                    { path: 'ticket', element: <Ticket /> },
                    { path: 'inbox', element: <Message /> },
                    { path: 'loan-application', element: <Loan /> }
                ]
            }
        ]
    }
]);

export default Router;
