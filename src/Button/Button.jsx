import "./Button.css";

export default function Button({ text, onClick }) {
    return (
        <button className="my-btn" onClick={onClick}>
            {text}
        </button>
    );
}
