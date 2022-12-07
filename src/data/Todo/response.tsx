import axios from 'axios';
import React, { useState } from 'react';
import { IGetAllTodoDto } from '../../domain/dto/todo';





export function fetchTodo(setTodo: (data:IGetAllTodoDto[]) => void) {
    try {
      axios.get<IGetAllTodoDto[]>('https://jsonplaceholder.typicode.com/Todos').then((response)=>setTodo(response.data))
    } catch (e) {
      alert(e)
    }
  }