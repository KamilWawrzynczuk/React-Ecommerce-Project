import React from "react";

function CoverPhoto() {
  return (
    // <div className="cover_photo_main">
    //   <div>
    //     <h2>Mid-Seasons Sale</h2>
    //     <h4>Up to 50% Discount</h4>
    //   </div>
    //   <div class="cover_photo_button">
    //   <button type="button" class="btn btn-outline-light">Buy now</button>
    //   </div>
    // </div>

    <div className='card mb-3' style={{maxWidth: '540px', border: '1px solid rgba(0, 0, 0)'}}>
      <div className='row g-0'>
        <div className='col-md-5'>
            <div className='bg-primary rounded-2' style={{height: '200px', width: '200px',border: '1px solid rgba(0, 0, 0)' }}>IMAGE</div>
          
       </div>
        <div className='col-md-5'>
          <div className='card-body'>
            <h5 className='card-title'>Name of Product</h5>
            <p className='card-text'>Description of Product. Taken from API</p>
             <span>
              <button type='button' className='btn btn-outline' onClick={()=>dispatch({type: 'plusOne'})}>
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

export default CoverPhoto;
