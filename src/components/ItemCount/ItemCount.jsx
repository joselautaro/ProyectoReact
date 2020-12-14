import {React, useState} from 'react';

const ItemCount = ({initialValue, maxValue, onAdd}) => {
    const [ count, setCount] = useState (initialValue)

    const adding = () =>{
        if( count >= initialValue && count < maxValue){
            return setCount ( count + 1 )
        }else if (count === maxValue){
            console.log(maxValue);
        }
    }

    const removing = () =>{
        if (count > initialValue){
            return setCount ( count -1 )
        } else if ( count <= initialValue){
            console.log (initialValue);
        }
    }


    return (
        <>
        <div>
            <div>
                <h3> {count}</h3>
            </div>
            <div>
                <button onClick={adding}>+</button>
                <button onClick={removing}>-</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount;