
import useStore from '~/store/hooks';
import { showAuthForm } from '~/store/Actions'; 

import './Modal.scss';

function Modal({ children }) {
    const dispatch = useStore()[1]
    const handleHideForm = () => {
        dispatch(showAuthForm(false))
    }
    return (
        <div className="modal" onDoubleClick={handleHideForm}>
            <div className="modal-overlay">
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
