import { useState } from "react";
import "./App.css";

// ==========================================================
// COUNTER COMPONENT
// Eta ekta "component" - ekta function jeta JSX (HTML-er moto
// dekhte kintu JS) return kore. Function-based component e
// state rakhte "useState" hook lage.
// ==========================================================
function Counter() {
  // useState(0) - shuru te count = 0
  // eta ekta array return kore: [current_value, updater_function]
  // "array destructuring" diye eder alada name diye rakhi
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter 🔢</h2>

      {/* JSX e {} er bhitore JS expression likha jay -
          eikhane count variable directly show hocche */}
      <p className="count-display">{count}</p>

      <div className="button-row">
        {/* Vanilla JS e amra addEventListener likhtam,
            React e directly onClick={function} lekha jay */}
        <button onClick={() => setCount(count - 1)}>−</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

// ==========================================================
// TODO COMPONENT
// Eikhane state ekta array - vanilla JS er To-Do app e
// "tasks" array chilo, ekhane oi shomoi concept e ache,
// shudhu setTodos() call korle React nijei re-render kore dey
// ==========================================================
function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState(""); // input box er value track korte

  function addTodo() {
    if (inputText.trim() === "") return;

    // Vanilla JS e amra tasks.push() korte partam (mutate),
    // kintu React e "immutability" mante hoy - notun array banai
    // spread operator (...) diye, purono shob rekhe notun ta jog kori
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText(""); // input box khali kore dei
  }

  function toggleTodo(id) {
    // map() diye protyekta todo ghure dekhi, matching id pele
    // completed flip kori - vanilla JS To-Do App er moto e logic
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="card">
      <h2>Todo List ✅</h2>

      <div className="input-row">
        <input
          type="text"
          value={inputText}
          // input e proti keystroke e eta call hoy, tai
          // "controlled input" bola hoy - React state e always sync thake
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {/* Array ke JSX e render korte .map() use kori -
            protyekta todo ke ekta <li> te convert kori.
            "key" prop ta React er internal optimization er jonno
            joruri - protyek item er unique identifier lage */}
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty-message">No tasks yet!</p>}
    </div>
  );
}

// ==========================================================
// APP COMPONENT (root) - Counter ar Todo, dutu component ke
// ekshathe compose/combine kore dekhachi. Eta React er
// "component composition" er shobcheye basic udahoron.
// ==========================================================
function App() {
  return (
    <div className="app">
      <h1>React Fundamentals: useState 🎯</h1>
      <Counter />
      <Todo />
    </div>
  );
}

export default App;