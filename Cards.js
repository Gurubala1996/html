import { Button, Card } from "react-bootstrap";
import "./Cards.css";

function Cards({item , handleCart}) {
    return(
        <div className="Product_added">
            <div>{item.title}</div>
            <div><img src={item.img} alt="" className="product_img" /></div>
            <div>$ {item.price}</div>
            <div><Button variant="danger" onClick={()=>handleCart(item)}>Add to Cart</Button></div>
        </div>
    )
    
}

export {Cards}