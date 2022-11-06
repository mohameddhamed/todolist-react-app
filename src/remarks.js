//first thing is writing html inside the return of app

import { useRef } from "react";

//create a file for each component

//import the useState hook from React
const [count, setCount] = useState([]);

//pass the state as prop to your component
//to inherit those todos just put it between {} in the parameters of the component's
//function

//to print a list of items, you create a list component and a component for each generic item
//and each should have its own key

//to reference an html object like input, you use the useRef hook
//pass an attribute ref={refname} 
const refname=useRef();
//inside of the function, if you're going to use it
const name= refname.current.value;
//to update state, inside of your function
setCount(prevCount=>{
    return [...prevCount,newCount];
})
//to generate random id use
uuidv4();
//to save todos you use 

//to tell it to pass data on reload
//accessing items from local storage and passing them to setCount
useEffect(() => {

    const stored=JSON.parse(localStorage.getItem(KEY));
    if (stored) setCount(stored);

}, [])


//you pass in array what's going to trigger this funtion
//saving the items in local storage
useEffect(() => {
    
    localStorage.setItem(KEY,JSON.stringify(items))
    
}, [third])

//if a prop of your items is going to change, make a function and reference it by id
//then pass that function by prop all the way down