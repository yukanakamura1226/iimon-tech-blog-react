import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement";
import Form from "./components/Form/Form";
import { useForm } from "react-hook-form";

function App() {
    const { register, watch } = useForm();
    const formData = watch();
    return (
        <>
            <Form register={register} formData={formData} />
            <Advertisement formData={formData} />
        </>
    );
}

export default App;
