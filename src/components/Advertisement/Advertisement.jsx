/* eslint-disable react/prop-types */
import Text from "./Text.jsx";
import Pictures from "./Pictures.jsx";
import "./Advertisement.css";

function Advertisement({ formData }) {
    return (
        <div className="advertisement">
            <Text formData={formData} className="text-content" />
            <Pictures formData={formData} className="pictures-content" />
        </div>
    );
}

export default Advertisement;
