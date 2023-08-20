import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./Footer.css"

const FooterArea = () => {
  return (
    <>
        <div className='footer-area'>
            <p className="read-the-docs">
                La Biblioteca Escondida | Copyright 2023 | Todos los derechos reservados.
            </p>
        </div>
    </>
    );
};

export default FooterArea;