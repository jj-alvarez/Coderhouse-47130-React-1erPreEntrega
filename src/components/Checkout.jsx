import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

// import { useHistory } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 

    const [datosCompletos, setDatosCompletos] = useState(false);

    const { carrito } = useContext(CartContext);

    const [pedidoId, setPedidoId] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        checkDatosCompletos();
    };

    const handleApellido = (e) => {
        setApellido(e.target.value);
        checkDatosCompletos();
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        checkDatosCompletos();
    };

    const checkDatosCompletos = () => {
        // Verificar si los campos de nombre, apellido y email están completos
        if (nombre && apellido && email) {
          setDatosCompletos(true);
        } else {
          setDatosCompletos(false);
        }
    };

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    }

    const handleCompra = async () => {
        if (datosCompletos) {
            try {
                // Crear un objeto con los datos del pedido
                const pedido = {
                    nombre,
                    apellido,
                    email,
                    productos: carrito, // carrito es la lista de productos seleccionados
                };
    
                // Agregar el pedido a la colección "pedidos" en Firestore
                const docRef = await addDoc(collection(db, 'pedidos'), pedido);

                setPedidoId(docRef.id);
    
                // Redirigir al usuario a la página de confirmación de compra con el ID del pedido
                console.log('ID del pedido:', docRef.id);
                //history.push(`/Finalizar/${docRef.id}`);

            } catch (error) {
                console.error('Error al realizar la compra:', error);
            }
        } else {
            console.error('No se han completado los datos personales.');
        }
    };
    
       
      

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                        
                            {pedidoId ? (
                                <Link to={`/Finalizar`}>
                                    <button
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}
                                        className="btn-volver333"
                                    >
                                        Finalizar
                                    </button>
                                </Link>
                                ) : (
                                <button type="submit" className="btn-volver33" onClick={handleCompra}>
                                    Comprar
                                </button>
                            )}

                            {pedidoId && <p>Comprobante de compra: {pedidoId}</p>}

                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;

/*
import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    };

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                            {okVisible ? (
                                <Link to={`/Finalizar`}>
                                    <button 
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}className="btn-volver333">Finalizar
                                    </button>  
                                </Link>
                            ) : (
                                <button type="submit" className="btn-volver33">
                                    Comprar
                                </button>
                            )}
                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;
*/

/* 

Codigo ok

import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

//import { useHistory } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';




const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 

    const { carrito } = useContext(CartContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    }

    const handleCompra = async () => {
        try {
          // Crear un objeto con los datos del pedido
          const pedido = {
            nombre,
            apellido,
            email,
            productos: carrito, // carrito es la lista de productos seleccionados
          };
      
          // Agregar el pedido a la colección "pedidos" en Firestore
          const docRef = await addDoc(collection(db, 'pedidos'), pedido);
      
          // Redirigir al usuario a la página de confirmación de compra
          history.push(`/Finalizar/${docRef.id}`);
        } catch (error) {
          console.error('Error al realizar la compra:', error);
        }
      };
      

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                            {okVisible ? (
                                <Link to={`/Finalizar`}>
                                    <button 
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}className="btn-volver333">Finalizar
                                    </button>  
                                </Link>
                            ) : (
                                <button type="submit" className="btn-volver33" onClick={handleCompra}>
                            Comprar
                            </button>
                            )}
                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;

*/


/*

codigo supremo

import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

// import { useHistory } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 

    const [datosCompletos, setDatosCompletos] = useState(false);

    const { carrito } = useContext(CartContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        checkDatosCompletos();
    };

    const handleApellido = (e) => {
        setApellido(e.target.value);
        checkDatosCompletos();
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        checkDatosCompletos();
    };

    const checkDatosCompletos = () => {
        // Verificar si los campos de nombre, apellido y email están completos
        if (nombre && apellido && email) {
          setDatosCompletos(true);
        } else {
          setDatosCompletos(false);
        }
    };

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    }

    const handleCompra = async () => {
        if (datosCompletos) {
          try {
            // Crear un objeto con los datos del pedido
            const pedido = {
              nombre,
              apellido,
              email,
              productos: carrito, // carrito es la lista de productos seleccionados
            };
      
            // Agregar el pedido a la colección "pedidos" en Firestore
            const docRef = await addDoc(collection(db, 'pedidos'), pedido);
      
            // Redirigir al usuario a la página de confirmación de compra
            history.push(`/Finalizar/${docRef.id}`);
          } catch (error) {
            console.error('Error al realizar la compra:', error);
          }
        } else {
         // alert('Completa todos los datos personales antes de realizar la compra.');
         console.error('No se han completado los datos personales.');
        }
    };
       
      

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                            {okVisible ? (
                                <Link to={`/Finalizar`}>
                                    <button 
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}className="btn-volver333">Finalizar
                                    </button>  
                                </Link>
                            ) : (
                                <button type="submit" className="btn-volver33" onClick={handleCompra}>
                            Comprar
                            </button>
                            )}
                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;

*/

/*

master code

import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

// import { useHistory } from 'react-router-dom';
import { db } from '../firebase/client';
import { collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 

    const [datosCompletos, setDatosCompletos] = useState(false);

    const { carrito } = useContext(CartContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        checkDatosCompletos();
    };

    const handleApellido = (e) => {
        setApellido(e.target.value);
        checkDatosCompletos();
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        checkDatosCompletos();
    };

    const checkDatosCompletos = () => {
        // Verificar si los campos de nombre, apellido y email están completos
        if (nombre && apellido && email) {
          setDatosCompletos(true);
        } else {
          setDatosCompletos(false);
        }
    };

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    }

    const handleCompra = async () => {
        if (datosCompletos) {
            try {
                // Crear un objeto con los datos del pedido
                const pedido = {
                    nombre,
                    apellido,
                    email,
                    productos: carrito, // carrito es la lista de productos seleccionados
                };
    
                // Agregar el pedido a la colección "pedidos" en Firestore
                const docRef = await addDoc(collection(db, 'pedidos'), pedido);
    
                // Redirigir al usuario a la página de confirmación de compra con el ID del pedido
                console.log('ID del pedido:', docRef.id);
                history.push(`/Finalizar/${docRef.id}`);

            } catch (error) {
                console.error('Error al realizar la compra:', error);
            }
        } else {
            console.error('No se han completado los datos personales.');
        }
    };
    
       
      

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                        
                            {okVisible ? (
                                <Link to={`/Finalizar`}>
                                    <button 
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}className="btn-volver333">Finalizar
                                    </button>  
                                </Link>
                            ) : (
                                <button type="submit" className="btn-volver33" onClick={handleCompra}>
                            Comprar
                            </button>
                            
                            )}
                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;

*/