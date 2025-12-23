import { createPortal } from "react-dom";

export default function HintPortal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="portal-overlay">
            <div className="portal-box">
                <h3>Підказка</h3>
                <p>
                    Не переварюй картоплю — інакше пюрешка буде водянистою, а ніхто цього не хоче!
                </p>
                <button onClick={onClose}>Зрозуміло</button>
            </div>
        </div>,
        document.body
    );
}
