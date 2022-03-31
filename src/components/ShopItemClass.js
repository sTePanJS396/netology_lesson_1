import React, { Component } from 'react'
import propTypes from 'prop-types'

class ShopItemClass extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item; // Получаем объект с данными из props'ов
    };
    // Функция-конструктор
    render() {
        return (
            <div className="main-content">
                <h2>{this.item.brand}</h2>
                <h1>{this.item.title}</h1>
                <h3>{this.item.description}</h3>
                <div className="description">
                    {this.item.descriptionFull}
                </div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{`${this.item.currency}${this.item.price}.00`}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
    // Функция-рендер компонента
};

ShopItemClass.propTypes = {
    item: propTypes.object
};
// Использование propTypes

export default ShopItemClass;