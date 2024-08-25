/* eslint-disable react/prop-types */
import Text from "./Text.jsx";
import Pictures from "./Pictures.jsx";

function Advertisement({ formData }) {
    return (
        <div className="advertisement">
            <Text formData={formData} />
            <Pictures formData={formData} />
        </div>
    );
}

export default Advertisement;
