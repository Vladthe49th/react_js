import "./Imagebox.css";

export default function ImageBox({ src }) {
    return (
        <div className="img-box">
            <img src={src} alt="demo" />
        </div>
    );
}
