import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/client';

import "./ItemListContainer.css"
import Item from './Item';
import '../App.css'
//import librosData from './libros.json';
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const ItemListContainer = () => {

    const { universo } = useParams();
    const [librosAMostrar, setLibrosAMostrar] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const librosCollection = collection(db, 'libros');
            let librosQuery;

            if (universo) {
                librosQuery = query(librosCollection, where('universo', '==', universo));
            } else {
                librosQuery = librosCollection;
            }

            const librosSnapshot = await getDocs(librosQuery);
            const librosData = librosSnapshot.docs.map(doc => doc.data());
            setLibrosAMostrar(librosData);
        };

        fetchData();
    }, [universo]);
    
    return (
    <>
        <div className='sitio'>
            <HeaderArea />

            <div className='main-area'>
                <div className='itemList'>
                    <div className='il-titulos'> 
                        <h2>La Biblioteca Escondida</h2>
                        <p>Aqui encontraras todos nuestros libros!</p>
                    </div>
                    <div className='itemMainArea'>
                        <Item libros={librosAMostrar} />
                    </div>
                </div>
            </div>

            <FooterArea />
        </div>
    </>
    );
};
  
export default ItemListContainer;