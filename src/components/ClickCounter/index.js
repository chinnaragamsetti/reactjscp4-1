// Write your code here

import './index.css'
import {Component} from 'react';

class ClickCounter extends Component{
state={count:0}
increment=()=>{
    this.setState((prevState)=>({count:prevState+1}))
}
    render(){
        
 const {count}=this.state
        return{
            <div className='containers'>
                <h1 className='heading'>The Button has been clicked <span class='span'>{count}</span> times</h1>
                <p className='paragraph'>Click the button to increase the count</p>
                <button className='button'onClick={this.increment}>Click Me!</button>
            </div>
        }
    }
}


export default ClickCounter