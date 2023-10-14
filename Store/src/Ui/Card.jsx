import React from 'react'
import ReactDOM from 'react-dom';
import Classes from "../assets/Css/Card.module.css"

const ModalOverlay =(props)=>{ return (
    <div className={Classes.modal}> 
      <div className={Classes.content}> 
      {props.children}
      </div>
    </div>
  )

}

//BackDrop on click  
const BackDrop=(props)=>{ return (
    <div onClick={props.onclick} className={Classes.backdrop} >
      
    </div>
  )

}




const Modal = (props) => {
    const LocationInDom = document.getElementById("overlays");
  return (
    <div>
     {ReactDOM.createPortal(<BackDrop onClick={props.onClick} />,LocationInDom)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,LocationInDom)}
    </div>
  )
}

export default Modal
