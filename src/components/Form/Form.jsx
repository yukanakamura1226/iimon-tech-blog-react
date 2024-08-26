// import React from "react";
import "./Form.css"
// eslint-disable-next-line react/prop-types
function Form({ register }) {
    return (
        <form>
            <div>
                <label htmlFor="name">物件名</label>
                <input id="name" {...register("name")} />
            </div>
            <div>
                <label htmlFor="address">住所</label>
                <input id="address" {...register("address")} />
            </div>
            <div>
                <label htmlFor="price">価格</label>
                <input id="price" type="number" {...register("price")} />
            </div>
            <div>
                <label htmlFor="price">交通</label>
                <input id="walkTime" type="number" {...register("walkTime")} />
            </div>
            <div>
                <label htmlFor="propertyType">物件の種類</label>
                <select id="propertyType" {...register("propertyType")}>
                    <option value="アパート">アパート</option>
                    <option value="一戸建て">一戸建て</option>
                    <option value="マンション">マンション</option>
                </select>
            </div>
            <div>
                <label htmlFor="floorPlan">間取り</label>
                <select id="floorPlan" {...register("floorPlan")}>
                    <option value="1R">1R</option>
                    <option value="1K">1K</option>
                    <option value="1DK">1DK</option>
                    <option value="1LDK">1LDK</option>
                </select>
            </div>
            <div>
                <label htmlFor="area">面積 (㎡)</label>
                <input id="area" type="number" {...register("area")} />
            </div>
            <div>
                <label htmlFor="image">外装</label>
                <input id="image" type="file" {...register("imageExterior")} />
            </div>
            <div>
                <label htmlFor="image">内装</label>
                <input id="image" type="file" {...register("imageInterior")} />
            </div>
            <div>
                <label htmlFor="image">間取り</label>
                <input id="image" type="file" {...register("imageMap")} />
            </div>
        </form>
    );
}

export default Form;
