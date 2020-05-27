import React, { useState } from 'react';

export default function List(props) {
const {data} = props;

return (
    <ul>
        {Object.values(data).map(val => {
            return <li>{val}</li>
        })}
    </ul>
)
}
