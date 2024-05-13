import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const BackDrop = () => {
    return <div className={`fixed w-[120%] h-[120%] bg-black opacity-80 z-40 blur-sm top-[-10%] left-[-10%] m-0 p-0`}></div>
}

const ModalOverlay = (props) =>{
    return (
        <div className={`fixed w-[55%] h-fit left-1/2 -translate-x-1/2 top-1/4 z-50`}>
            <div className={`px-5 py-3 rounded-lg bg-white flex flex-col gap-3 up
            justify-center items-center`}>{props.children}</div>
        </div>
    )
}

const portal = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop />, portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </Fragment>
  )
}

export default Modal