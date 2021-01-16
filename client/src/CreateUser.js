import React, { useState, useEffect } from 'react';

const List = () => {
  const [ todos, setTodos ] = useState([]);
  const [ text, setText ] = useState([]);


  const fetchTodos = async () => {
    const res = await fetch('http://localhost:3001/todos');
    setTodos(await res.json());
  };

  const addTodo = async () => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ desc: text, done: false })
    });

    fetchTodos();
    setText('');
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  const items = todos.map(todo => <Item todo={todo} key={todo._id} fetchTodos={fetchTodos} />);

  return <div>
    <div className="header">MERN todo list</div>
      {items}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>
        add
      </button>
</div>

};

const Item = (props) => {
  const { done, desc, _id } = props.todo;

  const deleteTodo = async () => {
    await fetch(`http://localhost:3001/todos/${_id}`, {
      method: 'DELETE'
    });

    props.fetchTodos();
  };

  return <div className="item">
    {done}
    {desc}
    <button onClick={deleteTodo}>
      remove
    </button>
  </div>
};


export default List