// /* eslint-disable react/prop-types */
// import './Text.css'; 

// function Text({ formData }) {
//     return (
//         <div className="text-container">
//             <h2 className="text-title">不動産広告</h2>
//             <p className="text-item">物件名: {formData.name}</p>
//             <p className="text-item">住所: {formData.address}</p>
//             <p className="text-item">価格: {formData.price}</p>
//             <p className="text-item">物件の種類: {formData.propertyType}</p>
//             <p className="text-item">面積: {formData.area} ㎡</p>
//         </div>
//     );
// }

// export default Text;

/* eslint-disable react/prop-types */
import './Text.css'; 

function Text({ formData }) {
    return (
        <div className="text-container">
            <header>
                <h2 className="text-title">{formData.name}</h2>
                <p>住所:{formData.address}</p>
            </header>
            <div className="text-table">
                <div className="text-row">
                    <div className="text-cell">価格</div>
                    <div className="text-cell">{formData.price}円</div>
                </div>
                <div className="text-row">
                    <div className="text-cell">交通</div>
                    <div className="text-cell">駅徒歩 {formData.walkTime}分</div>
                </div>
                <div className="text-row">
                    <div className="text-cell">間取り</div>
                    <div className="text-cell">{formData.floorPlan}</div>
                </div>
                <div className="text-row">
                    <div className="text-cell">物件の種類</div>
                    <div className="text-cell">{formData.propertyType}</div>
                </div>
                <div className="text-row">
                    <div className="text-cell">面積</div>
                    <div className="text-cell">{formData.area} ㎡</div>
                </div>
            </div>
        </div>
    );
}

export default Text;
