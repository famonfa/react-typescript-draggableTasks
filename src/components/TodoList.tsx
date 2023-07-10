import React from 'react'
import './styles.css'
import { Todo } from '../model'
import SingleComponent from './SingleComponent'
import { Droppable } from 'react-beautiful-dnd'

interface Props{
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    CompletedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoList: React.FC<Props> = ({todos, setTodos, CompletedTodos, setCompletedTodos }: Props) => {

  console.log(CompletedTodos);
  
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div className="todos" ref={provided.innerRef}{...provided.droppableProps}>
          <span className="todos__heading">
            Active tasks
          </span>
          {
            todos.map((todo, index) => (
              <SingleComponent 
                index = {index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
                />
            ))}
          {provided.placeholder}

        </div>
        )}
      
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided)=> (
          <div className="todos remove" ref={provided.innerRef}{...provided.droppableProps}>
          <span className="todos__heading">
              Completed tasks
            </span>
            {
              CompletedTodos.map((todo, index) => (
                <SingleComponent 
                  index = {index}
                  todo={todo}
                  todos={CompletedTodos}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                  />
              ))}
            {provided.placeholder}
          </div>
        )}
      
      </Droppable>
       
    </div>
  )
}

export default TodoList