import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import "./ItemDetail.css"
import Item from './Item';

const ItemDetail = () => {
    
    return (
      <div className='itemDetailContainer'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
};
  
export default ItemDetail;