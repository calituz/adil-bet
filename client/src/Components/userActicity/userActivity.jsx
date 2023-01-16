import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {getActivity} from "../../redux/actions/GET/index"
 

export default function UserActivity() {
  const initialState={
    'id':1,
    'page':1,
    'activity':'bets' 
  }
  const [data, setData] = useState(initialState);
const dispatch = useDispatch();

const handleOnSelect = (e) => {
setData({...data, 'activity':e.target.value})
 ;
console.log(data);
}
const handleOnClick = (e) => {
  console.log(data);
dispatch(getActivity(data))
}

  return (
    <div>
      <h3>Filtra por :</h3>
      <select onChange={e=>(handleOnSelect(e))}>
        <option value="bet">apuestas</option>
        <option value="deposit">depositos</option>
        <option value="all">todas</option>
      </select>
      <button onClick={(handleOnClick)}>buscar</button>

      
    </div>
  );
}

