import React, { useEffect, useState } from 'react';
import { cardVariant } from './domain/variant/cartVariant';
import Card from './app/components/card'
import { IGetAllAddressDto } from './domain/dto';
import { fetchUsers } from './data/Users/response';
import { fetchTodo } from './data/Todo/response';
import List from './app/components/List';
import UserItem from './app/components/userItem';
import { IGetAllTodoDto } from './domain/dto/todo';
import Todo from './app/components/todo';
import Events from './app/components/events';
import { BrowserRouter, Route, Routes, useNavigate, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from "./app/components/navbar";




const App = () => {
  

  const [users, setUsers] = useState<IGetAllAddressDto[]>([])
  const [todo, setTodo] = useState<IGetAllTodoDto[]>([])

  useEffect(() => {
    fetchUsers(setUsers)
    fetchTodo(setTodo)
  }, [])



  return (
    <Grid container direction="row"
      justifyContent="center"
      alignItems="center">

      <BrowserRouter>
          <Navbar/>

        <Routes>

          <Route path='/' element={<List
            items={users}
            renderItem={
              (users: IGetAllAddressDto) =>
                <UserItem
                  user={users} key={users.id}
                />
            }
          />}></Route>
          <Route path='/event' element={<Events />}></Route>
          <Route path='/card' element={<Card
            onClick={(num) => console.log('asd', num)}
            variant={cardVariant.outlined}
            width='200px'
            height='200px'>
            <button>asd</button>
          </Card>}></Route>
          <Route path='/listTodo' element={
            <List
              items={todo}
              renderItem={
                (todo: IGetAllTodoDto) =>
                  <Todo todo={todo} key={todo.id} />
              }
            />
          }></Route>
        </Routes>
      </BrowserRouter>
    </Grid >
  );
};

export default App;