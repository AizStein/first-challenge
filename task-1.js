const marksTodos = [
  {
    title: "read more about js",
    completed: true,
  },
  {
    title: "call a friend",
    completed: false,
  },
  {
    title: "make dinner",
    completed: true,
  },
  {
    title: "watch a movie",
    completed: false,
  },
  {
    title: "go to the grocery shop",
    completed: true,
  },
];

/*   * A. Mark has completed all the todos for today. Write a 
function that returns an array that all the todos inside are completed */

const taskCompleted = marksTodos.filter((task) => task.completed);

console.log("Completed Task:", taskCompleted);

/* * B. Mark has completed the "call a friend to do" 
Update the array and make this todo completed. */

const updatedTask = marksTodos.map((todos) => {
  if (todos.title === "call a friend") {
    return { ...todos, completed: true };
  }
  return todos;
});

console.log("Updated Task: ", updatedTask);

/* * C. Add an id to all the todos, 
id should start from 1 and increase by one (use the index)*/

const addingId = marksTodos.map((list, index) => {
  return { ...list, id: index + 1};
});


console.log('New list with ID:', addingId)