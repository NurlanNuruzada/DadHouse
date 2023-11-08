import React from 'react'
import Styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
export default function Card({ Image,Price,Title }) {
    return (
        <div className={Styles.MainContainer}>
            <img className={Styles.UpImage} src={Image} alt="" />
            <div className={Styles.Down}>
                <span className={Styles.CardTitle}>{Title}</span>
                <div className={Styles.PriceContainer}>
                    <span className={Styles.Price}>${Price}</span><span className={Styles.PriceTag}>/ daily</span>
                </div>
                <ul className={Styles.List}>
                    <li className={Styles.Description} ><FontAwesomeIcon color='#aa8453' icon={faCheck} /> Hotel ut nisan the duru</li>
                    <li className={Styles.Description} ><FontAwesomeIcon color='#aa8453' icon={faCheck} /> Orci miss natoque vasa ince</li>
                    <li className={Styles.Description} ><FontAwesomeIcon color='#666' icon={faX} /> Clean sorem ipsum morbin</li>
                </ul>
            </div>
        </div>
    )
}
