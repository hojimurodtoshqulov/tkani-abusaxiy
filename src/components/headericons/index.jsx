import React from 'react';
import c from './style.module.scss';
import {HiWrenchScrewdriver} from 'react-icons/hi2';
import {TbCertificate} from 'react-icons/tb';
import {AiOutlineSafetyCertificate} from 'react-icons/ai';
import {BiCalendarStar} from 'react-icons/bi';
import {FcOnlineSupport} from 'react-icons/fc';
import {GiCreditsCurrency} from 'react-icons/gi';


export default function Headericon() {
    return (
        <div className={c.headericon}>
            <div className={c.singleicon}>
                <i className={c.HiWrenchScrewdriver}><HiWrenchScrewdriver/></i>
                <p>Бесплатная <br /> сборка</p>
            </div>
            <div className={c.singleicon}>
                <i className={c.TbCertificate}><TbCertificate/></i>
                <p>Официальная <br /> гарантия</p>
            </div>
            <div className={c.singleicon}>
                <i className={c.AiOutlineSafetyCertificate}><AiOutlineSafetyCertificate/></i>
                <p>Лучшая <br /> цена</p>
            </div>
            <div className={c.singleicon}>
                <i className={c.BiCalendarStar}><BiCalendarStar/></i>
                <p>Бесплатная <br /> доставка</p>
            </div>
            <div className={c.singleicon}>
                <i className={c.GiCreditsCurrency}><GiCreditsCurrency/></i>
                <p>Рассрочка</p>
            </div>
            <div className={c.singleicon}>
                <i className={c.FcOnlineSupport}><FcOnlineSupport/></i>
                <p>Профессиональная <br /> консультатсия </p>
                
            </div>
        </div>
    )
}