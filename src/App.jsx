import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import ImageBox from "./components/ImageBox/ImageBox";

function App() {
    return (
        <div style={{ padding: 30 }}>
            <Button text="Touch me!" onClick={() => alert("EEEY!")} />

            <br /><br />

            <TextInput placeholder="Type something..." />

            <br /><br />

            <ImageBox src="https://somesite.com/vlads_awkward_photo" />
        </div>
    );
}

export default App;
