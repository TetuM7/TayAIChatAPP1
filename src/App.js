import './App.css';
import Appcontainer from './Components/Appcontainer.js';
import { Frontpagecontainer } from './FrontPage/Frontpage1/Frontpagecontainer.js';
import Datapage from './Datapage/Datapage1.js';
import UserInfopage from "./User/UserInfoPage.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './Auth/SignInPage.js';
import ProtectedCompontent from './Auth/Routing/ProtectedComponent.js';
import ProtectedCompontentchats from './Auth/Routing/ProtectedComponentchats.js';
import ProtectedCompontentlogin from './Auth/Routing/ProtectedComponentlogin.js';
import Alternatefrontpage from './FrontPage/Frontpage2/Alternatefrontpage.js';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedCompontent>
          <SignInPage user={user} setUser={setUser} />
        </ProtectedCompontent>
      ),
      errorElement: <div>Error: Page not found</div>,
    },
    {
      path: '/chats',
      element: (
        <ProtectedCompontentchats>
          <Frontpagecontainer user={user} />
        </ProtectedCompontentchats>
      ),
      errorElement: <div>Error: Page not found</div>,
    },
    {
      path: "/TayAI",
      element: (
        <ProtectedCompontentlogin>
          <Appcontainer user={user} />
        </ProtectedCompontentlogin>
      ),
      errorElement: <div>Error: Page not found</div>,
    },
    {
      path: '/Welcomepage',
      element: <Alternatefrontpage user={user} />,
      errorElement: <div>Error: Page not found</div>,
    },
    {
      path: "/datapage",
      element: (
        <ProtectedCompontentlogin>
          <Datapage user={user} />
        </ProtectedCompontentlogin>
      ),
    },
    {
      path: "/UserInfo",
      element: (
        <ProtectedCompontentlogin>
          <UserInfopage user={user} />
        </ProtectedCompontentlogin>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
