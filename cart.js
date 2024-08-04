import { useEffect, useState } from "react";
import "./cart.css";
import { Button} from "react-bootstrap";


function Cart({cart , setCart , handleAmount}) {
    const [price  , setPrice] = useState(0)

    useEffect(()=>
    {
        handlePrice()
    })

    const handlePrice = () =>
    {
        let ans = 0;

        cart.map((product)=> ans += product.price * product.amount  )

        setPrice(ans)

        console.log(price);


    }

    const deleteFun = (product) =>
        {
          const tempArr = cart.filter((list) => list.id !== product.id)
          
          setCart(tempArr)
      
        }
      
    return(
        <div>
            {
                cart.map((product)=>
                {
                    return(
                        <div className="Cart_added">
                        <div>{product.title}</div>
                        <div><img src={product.img} alt="" className="Cart_img" /></div>
                        <div>$ {product.price}</div>
                        <div><button onClick={()=>handleAmount(product , -1)}>-</button></div>
                        <div><button>{product.amount}</button></div>
                        <div><button onClick={()=>handleAmount(product , +1)}>+</button></div>
                        <div><Button variant="danger" onClick={()=>deleteFun(product)}>Delete</Button></div>
                    </div>
                                )
                })
            }
            <div className="d-flex justify-content-around bg-dark text-light h4 p-2">
                <div>Total Price of your cart</div>
                <div>$ {price}</div>
            </div>
        </div>
    )
    
}

export {Cart};