import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const createModlWrapperAndAppendToBody = (modalWrapperId) => {
  // create the element to wrap the modal
  const wrapperElement = document.createElement("div");
  // add dynamic id to the newly created div
  wrapperElement.setAttribute("id", modalWrapperId);
  // append the div to the bottom of the body tag to give it more heirachy in the dom
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

const ReactPortal = ({children, modalWrapperId = "modal-wrapper"}) => {
  const [modalWrapper, setModalWrapper] = useState(null);

  useLayoutEffect(() => {
    let modalElement = document.getElementById(modalWrapperId);
    let systemCreated = false;
    // if modal wrapper is not found, create and append it to the body
    if(!modalElement)  {
      systemCreated = true;
      modalElement = createModlWrapperAndAppendToBody(modalWrapperId);
    }
    setModalWrapper(modalElement);
    return () => {
      if(systemCreated && modalElement.parentNode) {
        modalElement.parentNode.removeChild(modalElement);
      }
    }
  }, [modalWrapperId]);

  if(modalWrapper === null) return null;

  return createPortal(children, modalWrapper);
}

export default ReactPortal