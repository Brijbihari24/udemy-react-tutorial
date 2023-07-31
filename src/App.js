import { useState } from 'react';
import Dropdown from './components/Dropdown';
import NavigationProvider from './context/Navigation';
import Link from './components/Link';
import Route from './components/Route';
import Accordion from "./components/Accordion"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
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
