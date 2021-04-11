import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import AOS from 'aos';
import LandingPage from './components/Landing-Page';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" title="Consultora de Desarrollo Web | Devany x Edrei">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
