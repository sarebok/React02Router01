import React from "react";

const Contacto = () => {
  return (
    <div className="contacto">
      <h1>Cuentanos, en que te podemos ayudar?</h1>
      <form>
        <input type="text" placeholder="ingresa tu correo:" />
        <input type="text" placeholder="cuentanos en que podemos ayudar" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
