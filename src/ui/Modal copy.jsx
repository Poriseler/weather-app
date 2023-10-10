import { createPortal } from "react-dom"
import Button from "./Button"


function Modal({children, onClose}) {
    return createPortal(
          <div className="bg-slate-200 fixed h-screen w-screen z-50 opacity-50">
            <div className=" bg-black fixed top-1/2 left-7 text-white min-w-[160px]"> 
                <Button type='primary' onClick={onClose}>X</Button>
                {children}
            </div> 
        </div>, document.body
    )
}

export default Modal
