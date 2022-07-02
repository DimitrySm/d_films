import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { RouteEnums } from './config/enums/routeEnums';
import { setAuthUserTC } from './redux/thunk';
import {Router} from './Router';

function App() {
  const dispatch = useDispatch<any>()

  const location = useLocation();
  let pathname: string = location.pathname
  pathname = pathname.split("/")[1];

  useEffect(() => {
    (async () => {
      try {
        dispatch(setAuthUserTC())
      } catch (error) {
        console.log(error);
      }
    })()
  }, [dispatch])
  

  return (
    <div className="App">
      {
        pathname !== RouteEnums.Login
        && pathname !== RouteEnums.SignUp
        && <Header />
      }
      <Router />
    </div>
  );
}

export default App;
