import React from 'react';

export interface IList<T>{
    items: T[]
    renderItem: (item: T) => React.ReactNode 
}