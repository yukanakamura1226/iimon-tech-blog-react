/* eslint-disable react/prop-types */
function Text({ formData }) {
    return (
        <div>
            <h2>Advertisement</h2>
            <p>物件名: {formData.name}</p>
            <p>住所: {formData.address}</p>
            <p>価格: {formData.price}</p>
            <p>物件の種類: {formData.propertyType}</p>
            <p>面積: {formData.area} ㎡</p>
        </div>
    );
}

export default Text;
