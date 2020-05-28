import React, { useState,useEffect } from 'react';
import {TextField,Button} from "@material-ui/core";
import TodoList from  "./list";
export default function ToDoApp(props) {
//localStorage.removeItem("todo");
 const [value,setValue] = useState("");
const [list,setList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : {});


 useEffect(() => {
     console.log("running useEffect",list);
     localStorage.getItem("todo") !== null ? localStorage.setItem("todo",list) : localStorage.setItem("todo",[])
    localStorage.setItem("todo",JSON.stringify(list));
 },[list])

 console.log(localStorage.getItem("todo"),list);

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <div>To do App </div>
            <TextField value={value} label="Enter Item" onChange={(e) => setValue(e.target.value)} />
            <Button onClick={() => {
                const idx = Object.keys(list).length;
                setList({...list,[idx]:value});
            }}>Add</Button>
                <Button onClick={() => {
                  localStorage.setItem("todo",JSON.stringify({}));
                setList({});
            }}>Clear List!</Button>
            <TodoList data={list}/>
        </div>
    )
}