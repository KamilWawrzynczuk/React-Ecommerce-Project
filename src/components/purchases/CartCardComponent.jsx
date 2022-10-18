import React, {useReducer} from "react";
import { Button, Card } from 'react-bootstrap';

function CartCardComponent() {
    const initialState = {counter: 1}

    function reducer(state, action) {switch (action.type){
        case 'plusOne':
            return {counter: state.counter+1}
            break;

            case 'minusOne':
                if (state.counter === 0)/* don't display content */
                return {counter: state.counter-1}
                 
                break;
            }
    
    }
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='card mb-3' style={{maxWidth: '540px', border: '1px solid rgba(0, 0, 0)'}}>
      <div className='row g-0'>
        <div className='col-md-5'>

            <div className='bg-primary rounded-2' style={{height: '200px', width: '200px',border: '1px solid rgba(0, 0, 0)' }}>IMAGE</div>
          {/* <img src=“...” className=“img-thumbnail rounded-2" alt=“...“></img> */}
       </div>
        <div className='col-md-5'>
          <div className='card-body'>
            <h5 className='card-title'>Name of Product</h5>
            <p className='card-text'>Description of Product. Taken from API</p> 
             <span>
              <button type='button' className='btn btn-outline-secondary' onClick={()=>dispatch({type: 'plusOne'})}>
                +
              </button>
              <p>Quantity</p>
              <button type='button' className='btn btn-outline-secondary' onClick={()=>dispatch({type: 'minusOne'})}>
                -
              </button>
            </span>
             <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div> 
     </div>

  
  
  );
}

export default CartCardComponent;
