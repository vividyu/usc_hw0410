import React from 'react';
import ExpandableMenu from './ExpandableMenu';

const menuConfig = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Mail'],
  },
];

function App() {
  return (
    <div className="App">
      <ExpandableMenu menuConfig={menuConfig} />
    </div>
  );
}

export default App;

