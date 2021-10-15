import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//componentes
import Topbar from './components/topbar/Topbar'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
