import Store from "./Store"
import React, {useState} from 'react';
// import HeroDeteils from './HeroDetails'
// const [id, getId] = useState(0);
// let callID = null;
const HeroList = () => {
    const [count, setCount] = useState(0);
    const [heroID, setHeroID] = useState(0);
    const selectHero = (id) => {
        setHeroID(id);
        // callID = heroID
        // console.log(heroID + id)
        debugger
        // HeroDeteils(heroID)
        // return <HeroDetails callID={heroID}/>
// 
    } 
    
    function ListStore({name}) {
        // debugger
        return <li><button onClick={() => {selectHero(name.id)}}> ID: {name.id}, NAME: {name.name}</button></li>
    }//TODO: llamada a details
    const sumOperation = count + 10;
    const restOperation = count - 10;
    
          return <div>
                    <h2>Hero List</h2>
                    <ul>
                        <ListStore name={Store[count]} value={count}/>
                        <ListStore name={Store[count+1]} value={count+1}/>
                        <ListStore name={Store[count+2]} value={count+2}/>
                        <ListStore name={Store[count+3]} value={count+3}/>
                        <ListStore name={Store[count+4]}/>
                        <ListStore name={Store[count+5]}/>
                        <ListStore name={Store[count+6]}/>
                        <ListStore name={Store[count+7]}/>
                        <ListStore name={Store[count+8]}/>
                        <ListStore name={Store[count+9]}/>
                    </ul>
                    <button onClick={ () =>  count === 0 ? alert('no puedes pasar!') : setCount(restOperation)}>
                    Back</button>
                    <button onClick={ () =>  count === 10 ? alert('no puedes pasar!')  : setCount(sumOperation)}>
                    Next</button>
                </div>

    // })
}
export default HeroList;