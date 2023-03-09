import React from 'react';
import c from './style.module.scss';
import {Link} from "react-router-dom";
import {HiWrenchScrewdriver} from 'react-icons/hi2';
import {TbCertificate} from 'react-icons/tb';
import {AiOutlineSafetyCertificate} from 'react-icons/ai';
import {BiCalendarStar} from 'react-icons/bi';
import {FcOnlineSupport} from 'react-icons/fc';
import {GiCreditsCurrency} from 'react-icons/gi';


export default function Headericon() {
    return (
        <div className={c.headericon}>
            <Link className={c.singleicon}>
                <i className={c.HiWrenchScrewdriver}><HiWrenchScrewdriver/></i>
                <p>Бесплатная сборка</p>
            </Link>
            <Link className={c.singleicon}>
                <i className={c.TbCertificate}><TbCertificate/></i>
                <p>Официальная гарантия</p>
            </Link>
            <Link className={c.singleicon}>
                <i className={c.AiOutlineSafetyCertificate}><AiOutlineSafetyCertificate/></i>
                <p>Лучшая цена</p>
            </Link>
            <Link className={c.singleicon}>
                <i className={c.BiCalendarStar}><BiCalendarStar/></i>
                <p>Бесплатная доставка</p>
            </Link>
            <Link className={c.singleicon}>
                <i className={c.GiCreditsCurrency}><GiCreditsCurrency/></i>
                <p>Рассрочка</p>
            </Link>
            <Link className={c.singleicon}>
                <i className={c.FcOnlineSupport}><FcOnlineSupport/></i>
                <p>Профессиональная консультатсия </p>
                
            </Link>
        </div>
    )
}