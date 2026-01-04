import {createRoot} from 'react-dom/client';
import { useState } from 'react';
import {createPortal} from 'react-dom'
import { Model } from 'mongoose';

function Modal({isOpen,onClose,children}){
  if (!isOpen) {
    return null
  }else{
    return createPortal(
      <div style={{
        position:'fixed',
        top:'0',
        left:'0',
        height:'100vh',
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <div style={{
          background:'white',
          padding:'20px',
          border:'1px black solid'
        }}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>,
      document.body
    );
  }
}

function MyApp(){
  const [isOpen,setIsOpen]=useState(false)

  return(
    <div>
      <h1>MyApp</h1>
      <button onClick={()=>{setIsOpen(true)}}>openModel</button>

      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
        <h2>Model content</h2>
        <p>the content is outside of the parent div in dom hirarchey</p>
      </Modal>
    </div>
  )
}

createRoot(document.getElementById('sandy')).render(
  <MyApp />
)