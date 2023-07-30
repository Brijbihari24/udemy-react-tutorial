import { useState } from 'react';
import Dropdown from './components/Dropdown';
import NavigationProvider from './context/Navigation';
import Link from './components/Link';
import Route from './components/Route';
import Accordion from "./components/Accordion"

function App() {
  return (
    <div>
      <Link to="/dropdown">Go to Dropdown</Link>
      <Link to="/accordian">Go to Accordian</Link>

      <div>
        <Route path="/dropdown">
          <Dropdown />
        </Route>
        <Route path="/accordian">
          <Accordion />
        </Route>
      </div>
    </div>
  );
}

export default App;
