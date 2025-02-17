import './App.css';
import Todo from './coponents/Todo.jsx'
import Modal from './coponents/Modal.jsx'
function App() {
 return (
  <div className='todo__wrapper'>
  <Todo 
  title="Finish Frontend Simplified"
  paragraph="Code along with Frontend Simplified"
  />
  <Todo 
  title="Do Interviews"
  paragraph="Finish every interview section"
  />
  <Todo 
  title="Land 100K job"
  paragraph="Apply to 100 jobs"
  />
  <Modal 
  title="Are you Sure you want to Delete?"
  />
  </div>
 );
}

export default App
