import { createPortal } from "react-dom"
import Button from "./Button"
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { updateSelectedDay } from "../features/tilesList/tilesListSlice";


const ModalContext = createContext()


function Modal({children}){
    const [openName, setOpenName] = useState('');
    const dispatch = useDispatch()

    const close = () => {
        setOpenName('');
        dispatch(updateSelectedDay(null));
    }
    const open = setOpenName;
    return (<ModalContext.Provider value={{ openName, close, open}}>{children}</ModalContext.Provider>)
}

function Open({children, open: windowNameToOpen})  {
    const {open} = useContext(ModalContext);
    
    return cloneElement(children, {onClick: ()=> open(windowNameToOpen)});
}


function Window({children, name}) {
    const {openName, close} = useContext(ModalContext)
    const ref=useRef()
    useEffect(function() {
        function handleClick(e) {
            if(ref.current && !ref.current.contains(e.target)) close()
        }
        document.addEventListener('click', handleClick, true);
        return () => document.removeEventListener('click', handleClick, true)
    }, [close])
    
    if (name !== openName) return null;
    return createPortal(
    

          <div className="fixed top-0 left-0 h-screen w-screen z-[1000]  backdrop-blur-sm ">
            <div className=" bg-slate-700 fixed top-1/2 left-1/2 text-white min-w-[160px] flex flex-row translate-x-[-50%] translate-y-[-50%] rounded-lg" ref={ref}> 
                <div className="ps-3 pt-2">
                <Button type='' onClick={close}>X</Button>

                </div>
                {children}
            </div> 
        
         </div>, document.body
    )
}

Modal.Window = Window
Modal.Open = Open

export default Modal
