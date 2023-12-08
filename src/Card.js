import React from 'react'

function Card() {
  return (
    <div>
      <div class="card text-white bg-primary mb-3">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">card1</h5>
          <p class="card-text"></p>
        </div>
      </div> 
<div class="card text-white bg-secondary mb-3" >
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">card2</h5>
          <p class="card-text"></p>
        </div>
      </div>
<div class="card text-white bg-danger mb-3" >
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">card3</h5>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  )
}

export default Card
