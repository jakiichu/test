import React, {FC} from 'react';
import { ITodo } from '../../domain/interface/todo';

const Todo: FC<ITodo> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>   
            {todo.id}. {todo.title} 
        </div>
    );
};

export default Todo;