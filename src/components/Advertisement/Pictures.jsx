/* eslint-disable react/prop-types */
function Pictures({ formData }) {
    const createImageURL = (file) => {
        if (file && file[0] instanceof File) {
            return URL.createObjectURL(file[0]);
        }
        return null;
    };

    return (
        <div>
            <h3>画像</h3>
            {createImageURL(formData.imageExterior) && (
                <div>
                    <p>
                        外装画像:{" "}
                        <img
                            src={createImageURL(formData.imageExterior)}
                            alt="外装画像"
                        />
                    </p>
                    <p>
                        内装画像:{" "}
                        <img
                            src={createImageURL(formData.imageInterior)}
                            alt="内装画像"
                        />
                    </p>
                    <p>
                        間取り画像:{" "}
                        <img
                            src={createImageURL(formData.imageMap)}
                            alt="間取り画像"
                        />
                    </p>
                </div>
            )}
        </div>
    );
}

export default Pictures;
