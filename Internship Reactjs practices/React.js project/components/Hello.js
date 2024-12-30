import React from 'react'

const Hello = ( ) => 
     {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Vishwas')
    )
        // class MyComponent extends React.Component {
        //     handleClick = () => {
        //       console.log("Button clicked!");
        //     };
          
        //   render() {
        //       return (
        //         <button onClick={this.handleClick}>
        //           Click me
        //         </button>
        //       );
        //     }
        //   }
    
}
export default Hello