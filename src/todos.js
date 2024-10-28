import { useContext } from "react";
import { AuthContext } from "./context";
import { collection, addDoc, getDocs, doc, updateDoc, getDoc  } from "firebase/firestore"
import {auth} from "./firebaseConfig"
import {db} from "./firebaseConfig"






export const fetchListOfTodos = async() => {
    const user = auth.currentUser;
    if(user){

        try{

            const todosCollection = collection(db, "users", user.uid, "todos");

            const todosSnapshot = await getDocs(todosCollection);
            const todoList = todosSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
              }));
            
            return todoList;

        } catch (err){
            console.error("Error fetching todos: ", err);
        }


    }
};

export const addNewTodo = async({task, day, month, year}) => {
    const user = auth.currentUser;
    if(user){
        try{

            const todosCollection = collection(db, "users", user.uid, "todos");

            await addDoc(todosCollection, {
                todo: task,
                state : "pending",
                day : day,
                month : month,
                year : year,
            });


        } catch (err){
            console.error("Error adding a todo: ", err);
        }
    }

    const newTodo = {
        todo : task,
        state : "pending",
        day : day,
        month : month,
        year : year
    };


    return newTodo;
};

export const changeState = async(id) => {
    const user = auth.currentUser;
    

    if (user) {
        try {

            const todoRef = doc(db, "users", user.uid, "todos", id);

            const todoSnapshot = await getDoc(todoRef);
            if (todoSnapshot.exists()) {
                const currentStatus = todoSnapshot.data().state;

                const newStatus = currentStatus === "pending" ? "completed" : "pending";

                await updateDoc(todoRef, {
                state: newStatus,
                });
            }
    
          
        } catch (error) {
          console.error("Error updating todo status: ", error);
        }
      }

    

    return 
}
