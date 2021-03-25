import react from "react";

function Navbar(){
    return(
        <nav className="container setnav">
            <i className="fas fa-shopping-cart" style={{fontSize:"1.7rem",color:"white",padding:"0.27em"}}></i>
            <div className="sepet">{0}</div>
        </nav>
    )
}

export default Navbar;