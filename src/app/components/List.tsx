import React from 'react';
import { IList } from "../../domain/interface/list"

export default function List<T>(props: IList<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}