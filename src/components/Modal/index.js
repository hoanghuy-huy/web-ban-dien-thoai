

import './Modal.scss';

function Modal({ children }) {

    return (
        <div className="modal" >
            <div className="modal-overlay">
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
