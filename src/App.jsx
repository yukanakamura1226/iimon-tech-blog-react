import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement";
import Form from "./components/Form/Form";
import { useForm } from "react-hook-form";

function App() {
    const { register, watch } = useForm();
    const formData = watch();
    return (
        <div className="app-all">
            <Form register={register} formData={formData} className="form" />
            <Advertisement formData={formData} className="advertisement" />
        </div>
    );
}

export default App;
