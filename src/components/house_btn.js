import React, { Component } from 'react';

// Expects: 
//"stage":string
class HouseBtn extends Component {
  render() {
    // const namespaces = {
    //   "xmlnsXlink": "http://www.w3.org/1999/xlink",
    //   "xmlSpace": 'preserve'
    // };

    return (
      <div>
        <div>
          
        </div>
        <div className={`position-relative h-100 w-100 d-flex justify-content-center align-items-center`}>
          {/*<svg xmlns="http://www.w3.org/2000/svg" {...namespaces} version="1.1" id="Capa_1" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 512 512">
            <g>
              <path d="M512,296l-96-96V56h-64v80l-96-96L0,296v16h64v160h384V312h64V296z" />
              {/*question_mark
            </g>
          </svg>*/}
          <input id='site_icon_url' className='position-absolute w-100 h-100' name={this.props.name} type="radio" value={`house_${this.props.stage}.png`} onClick={this.props.changeForm} style={{cursor: 'pointer', opacity: 0}}/>
          <img src={`../assets/house_${this.props.stage}.png`} className='w-100 housebtn' alt={`${this.props.stage} house`}/>
        </div>
      </div>
    );
  }
}

export {HouseBtn}