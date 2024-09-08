


const todoList = [
    {
        id: 1,
        todo : 'Complete basics of Data Structures',
        state : 'pending',
        day : "09",
        month : "09",
        year : "2024"

    },
    {
        id: 2,
        todo : 'Sleep',
        state : 'pending',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 3,
        todo : 'Write Lab',
        state : 'completed',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 4,
        todo : 'Do Maths Assignment',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 5,
        todo : 'Do 5 CP problems',
        state : 'completed',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 6,
        todo : 'Learn React Hooks',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 7,
        todo : 'Drink Water',
        state : 'completed',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 8,
        todo : 'Go for a walk',
        state : 'pending',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 9,
        todo : 'Call Mother',
        state : 'pending',
        day : "08",
        month : "09",
        year : "2024"
        
    },
    {
        id: 10,
        todo : 'Learn descrete mathematics',
        state : 'pending',
        day : "09",
        month : "09",
        year : "2024"
        
    },
    {
        id: 11,
        todo : 'Play Video Game',
        state : 'pending',
        day : "09",
        month : "09",
        year : "2024"
        
    },
    {
        id: 12,
        todo : 'Watch a Movie',
        state : 'pending',
        day : "09",
        month : "09",
        year : "2024"
        
    },
    {
        id: 13,
        todo : 'Take Koko for a walk',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 14,
        todo : 'Go out with friends',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 15,
        todo : 'Go to college',
        state : 'pending',
        day : "13",
        month : "10",
        year : "2024"
        
    },
    {
        id: 16,
        todo : 'Play football',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 17,
        todo : 'Watch India v/s Pakistan',
        state : 'pending',
        day : "17",
        month : "10",
        year : "2024"
        
    },
    {
        id: 18,
        todo : 'Listen to Music',
        state : 'pending',
        day : "10",
        month : "09",
        year : "2024"
        
    },
    {
        id: 19,
        todo : 'Study for exam',
        state : 'pending',
        day : "11",
        month : "09",
        year : "2024"
        
    },
    {
        id: 20,
        todo : 'Complete the Todo App',
        state : 'completed',
        day : "08",
        month : "09",
        year : "2024"
    }
]


export const fetchListOfTodos = async() => {
    await new Promise((resolve) => setTimeout(resolve, 600));

    return todoList;
};

export const addNewTodo = async({task, day, month, year}) => {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newTodo = {
        id: todoList.length + 1,
        todo : task,
        state : "pending",
        day : day,
        month : month,
        year : year

    };
    console.log(newTodo);

    todoList.push(newTodo);

    return newTodo;
};

export const changeState = async(id) => {
    await new Promise((resolve) => setTimeout(resolve, 200));

    todoList[id-1].state == "pending"? todoList[id-1].state = "completed" : todoList[id-1].state = "pending";

    return todoList[id-1].state;
}

export const getDetails = async(id) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return todoList[id-1];
}