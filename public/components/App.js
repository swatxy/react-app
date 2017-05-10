import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';
import RouterDemo from '../containers/RouterDemo';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
    <hr/>
    <RouterDemo />
  </div>
);

export default App;