import React from 'react';
import { CommonContext } from './CommonContext';
function UpdateButton(){
    return(
        <CommonContext.Consumer>


            {
                ({updateColor})=>(
                    <div>
                    <button onClick={()=>updateColor('yellow')}>
                        Update Color
                    </button>
                    <button onClick={()=>updateColor('blue')}>
                        Update Colorr
                    </button>
                    <button onClick={()=>updateColor('skyblue')}>
                        Update Colorr
                    </button>
                    </div>
                )
            }
        </CommonContext.Consumer>
    )
}

export default UpdateButton