import React from 'react'

// function Greet(){
//     return<h1>Hello vishwas</h1>
// }

const Greet = props => {
    console.log(props) 
    props.name = "Vishwas"
    return(
        <div>
             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
             {props.children}
        </div>
    )
} 

export default Greet