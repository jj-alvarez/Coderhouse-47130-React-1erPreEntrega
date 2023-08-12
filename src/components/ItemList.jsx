import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import Item from './Item.jsx'
import "./ItemList.css"

const ItemList = () => {
    
    return (
      <div className='itemListContainer'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
};
  
export default ItemList;
