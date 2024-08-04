import "./product.css";
import { list } from "./list";
import { Cards } from "./Cards";

function Product({handleCart}) {

    return(
        <div className="Products_main">
            {list.map((item)=> <Cards item={item} handleCart={handleCart}/>)}
        </div>
    )
    
}

export {Product};