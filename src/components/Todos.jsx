import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const [editedText, setEditedText] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  const editTodoHandler = (eachTodo) => {
    setEditedText(eachTodo);
    setInput(eachTodo.text);
    setIsEditable(true);
  };

  const updatedTodoHandler = () => {
    dispatch(updateTodo({ id: editedText.id, text: input }));
    setInput("");
    setIsEditable(false);
  };

  return (
    <div>
      <div className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {isEditable ? (
          <button
            onClick={() => updatedTodoHandler()}
            className="text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => addTodoHandler()}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add
          </button>
        )}
      </div>
      <div style={{ fontSize: "20px", marginTop: 5 }}>Todos</div>
      <ul className="list-none">
        {todos.map((eachTodo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={eachTodo.id}
          >
            <div className="text-white">{eachTodo.text}</div>
            <div>
              <button
                onClick={() => editTodoHandler(eachTodo)}
                className="text-white bg-green-500 border-0 mr-2 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              >
                EDIT
              </button>
              <button
                onClick={() => dispatch(removeTodo(eachTodo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
