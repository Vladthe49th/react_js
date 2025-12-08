import "./TextInput.css";

export default function TextInput({ placeholder }) {
    return <input className="my-input" type="text" placeholder={placeholder} />;
}
