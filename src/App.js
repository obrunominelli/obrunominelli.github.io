import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/contact" component={ Contact }/>
      <Route exact path="/about" component={ About }/>
      <Route exact path="/projects" component={ Projects }/>
      <Route exact path="*" component={ NotFound }/>
      <Route exact path="/" component={ Home }/>
    </Switch>
  );
}

export default App;
