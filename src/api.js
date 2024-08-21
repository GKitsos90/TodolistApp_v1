const API_URL = 'http://localhost:4200/todos';

export const fetchTodos = async () => {
  const resp = await fetch(API_URL);

  if (!resp.ok) {
    throw new Error('Failed to fetch todos');
  }

  return resp.json();
};

export const addTodo = async (todoTitle) => {
  const resp = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoTitle)
  });

  if (!resp.ok) {
    throw new Error('Failed to add todo');
  }

  return resp.json();
};

export const updateTodo = async (todo) => {
  const resp = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  if (!resp.ok) {
    throw new Error('Failed to update todo');
  }

  return resp.json();
};

export const deleteTodo = async (todoId) => {
  const resp = await fetch(`${API_URL}/${todoId}`, {
    method: 'DELETE'
  });

  if (!resp.ok) {
    throw new Error('Failed to delete todo');
  }

  return todoId;
};

