import cartwidget from './assets/cartwidget.svg'

function CartWidget (){
    return (
        <>
            <img src={cartwidget} alt="cart-widget" />
            <span>0</span>
        </>
    )
}

export default CartWidget