import { Container } from "react-bootstrap";
import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar({show , setShow , size}) {
    return(
        <div className="container-fluid bg-success d-flex justify-content-between px-3 sticky-top">
            <div>
                <h2 className="text-light" onClick={()=>setShow(true)}>Shopping Products</h2>
            </div>

            <div>
                <h2 onClick={()=>setShow(false)}>
                    <span className="text-light "><AiOutlineShoppingCart /></span>
                    <span className="text-warning ">{size}</span>
                </h2>
            </div>
        </div>
    )
    
}

export {Navbar};