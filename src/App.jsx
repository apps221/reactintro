import './App.css';
import Todo from './coponents/Todo.jsx'
import Modal from './coponents/Modal.jsx'
import Counter from './coponents/Counter.jsx'
import Cart from "./coponents/Cart.jsx"
import Arraycounter from './coponents/Arraycounter.jsx';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    )



   /* const [showModal, setShowModal] = useState(false);
    function onTodoDelete() {
        setShowModal(true);
        console.log("onTodoDelete")
    }
   // return <Arraycounter />
   // return <Cart />
   // return <Counter />
 return (
  <div className='todo__wrapper'>
  <Todo onTodoDelete={onTodoDelete}
  title="Finish Frontend Simplified"
  paragraph="Code along with Frontend Simplified"
  />
  <Todo onTodoDelete={onTodoDelete}
  title="Do Interviews"
  paragraph="Finish every interview section"
  />
  <Todo onTodoDelete={onTodoDelete}
  title="Land 100K job"
  paragraph="Apply to 100 jobs"
  />
  {showModal ? <Modal title="Are you Sure you want to Delete?"/>: null}
  </div>
 );*/
}

export default App;
