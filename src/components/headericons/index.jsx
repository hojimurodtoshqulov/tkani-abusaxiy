import React from 'react';
import c from './style.module.scss';

export default function Headericon() {
    return (
        <div className={c.headericon}>
            <div className={c.singleicon}>
                <i class="fa-solid fa-truck"></i>
                <p>Бесплатная доставка</p>
            </div>
            <div className={c.singleicon}>
                <i class="fa-solid fa-truck"></i>
                <p>Официальная гарантия</p>
            </div>
            <div className={c.singleicon}>
                <i class="fa-solid fa-truck"></i>
                <p>Лучшая цена</p>
            </div>
            <div className={c.singleicon}>
                <i class="fa-solid fa-truck"></i>
                <p>Бесплатная доставка</p>
            </div>
        </div>
    )
}