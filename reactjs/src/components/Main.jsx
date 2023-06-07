import React from "react";
import "../Message.css"

const Main=()=>{
    return(
        <div className="bienvenido">
            <h2>Pagina principal</h2>
            <p>Este es el contenido principal</p>
            <div className="image">
                <img src="src/components/cat.jpg" alt="" />
                <img src="src/components/dog.jpg" alt="" />
            </div>
        </div>
    );
}

export default Main;