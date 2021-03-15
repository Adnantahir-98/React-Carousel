import './App.css';
import Home from './components/home';
import {Switch, Route} from 'react-router-dom'


function App() {
  return (

    <Switch>

      <div className="App">
        <Route path="/" exact component={Home} />
      </div>
    </Switch>

  );
}

export default App;
