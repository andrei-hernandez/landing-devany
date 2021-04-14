import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import LandingPage from './components/';

function App() {
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
