import axios from 'axios';
import React, { useState } from 'react';
import { IGetAllAddressDto } from '../../domain/dto';




export function fetchUsers(setUsers: (data:IGetAllAddressDto[]) => void) {
    try {
      axios.get<IGetAllAddressDto[]>('https://jsonplaceholder.typicode.com/users').then((response)=>setUsers(response.data))
    } catch (e) {
      alert(e)
    }
  }