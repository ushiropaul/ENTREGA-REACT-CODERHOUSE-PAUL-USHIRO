import React, { useState, useImperativeHandle, forwardRef } from "react";

function ItemCount(props, ref) {
    const [num, setNum] = useState(1);


    const checkNegative = () => {
        if (num === 1) {
            return 1;
        } else {
            return num - 1;
        }
    };


    useImperativeHandle(ref, () => ({
        itemCount: () => num,
    }));

    return (
        <>



            <div className='flex items-center justify-center p-1 border shadow-md rounded-md mr-4 bg-blue'>

                <img className='h-10 cursor-pointer' src='/img/leftArrow.png' onClick={() => setNum(checkNegative())} />
                <p className="text-blue-500 text-5xl select-none">{num}</p>
                <img className='h-10 cursor-pointer' src='/img/rightArrow.png' onClick={() => setNum(num + 1)} />

            </div>

        </>
    );
}



export default forwardRef(ItemCount);