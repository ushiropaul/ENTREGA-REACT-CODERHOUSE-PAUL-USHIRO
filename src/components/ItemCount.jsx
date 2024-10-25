import { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(0)
    if(count < 0) {
        setCount(0)
    }
    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    return (
        <div>
            <p>{count}</p>

            <button onClick={handleSub}>-</button>
            <button>agregar al carrito</button>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount