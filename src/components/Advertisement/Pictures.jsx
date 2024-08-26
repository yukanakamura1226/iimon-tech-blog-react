/* eslint-disable react/prop-types */
import "./Pictures.css";

function Pictures({ formData }) {
    const createImageURL = (file) => {
        if (file && file[0] instanceof File) {
            return URL.createObjectURL(file[0]);
        }
        return null;
    };

    return (
        <div className="pictures-container">
            <div className="image-row">
                {createImageURL(formData.imageExterior) && (
                    <div className="image-item">
                        <p>外装</p>
                        <img
                            src={createImageURL(formData.imageExterior)}
                            alt="外装画像"
                        />
                    </div>
                )}
                {createImageURL(formData.imageInterior) && (
                    <div className="image-item">
                        <p>内装</p>
                        <img
                            src={createImageURL(formData.imageInterior)}
                            alt="内装画像"
                        />
                    </div>
                )}
                {createImageURL(formData.imageMap) && (
                    <div className="image-item">
                        <p>間取り</p>
                        <img
                            src={createImageURL(formData.imageMap)}
                            alt="間取り画像"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pictures;
