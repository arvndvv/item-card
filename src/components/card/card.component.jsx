import React, { useState } from 'react';
import './card.style.css';
import cartImage from '../../images/cart.png';
const OptionSelect = ({ option, list }) => {
  const [selectedOption, setSelected] = useState(list[0].value);
  const [menuOpened, setMenuOpened] = useState(false);


  if (option === 'color') {
    return (
      <div className='itemcard-select__container'>
        <div className="itemcard-select__container--selected" style={{ 'background': selectedOption }} onClick={() => { setMenuOpened(!menuOpened) }}></div>
       {menuOpened && ( <div className="itemcard-select__items">
          {
            list.map((item, index) => {
              return(
                <div onClick={() => { setSelected(item.value) }} className={'itemcard-select__item'} key={index} style={{ 'background': item.value,'border':'none' }}>
               </div>
            )
          })
          }
        </div>)}
      </div>)
  }
  return (
    <div className='itemcard-select__container'>
        <div className="itemcard-select__container--selected" onClick={() => { setMenuOpened(!menuOpened) }}>{selectedOption}</div>
       {menuOpened && ( <div className="itemcard-select__items">
          {
            list.map((item, index) => {
              return(
                <div onClick={() => { setSelected(item.value) }} className={'itemcard-select__item'} key={index} >
                  {item.value}
               </div>
            )
          })
          }
        </div>)}
      </div>)
}
const OptionList = ({ option, list }) => {
  const [selectedOption, setSelected] = useState(list[0].value);
  return list.map((item, index) => {
    if (option === 'color') {
      return (<div onClick={() => { setSelected(item.value) }} className={'itemcard-option__container itemcard__option--color' + (selectedOption === item.value ? ' active' : '')} key={index} style={{ 'borderColor': item.value }} >
        <span className='itemcard-option__item' style={{ 'background': item.value }}></span>
      </div>)
    }
    else {
      return (<div className={"itemcard-option__container itemcard-option__container--size" + (selectedOption === item.value ? ' active' : '')} key={index} onClick={() => { setSelected(item.value) }}>
        <span className='itemcard-option__item'>
          {item.value}
        </span>
      </div>)
    }

  })

}
export default function Card({ cardList }) {
  const convertToTitleCase = (str) => {
    return str.replace('_', ' ').replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })
  }
  return (
    cardList.map((card, index) => (
      <div className="itemcard__container" key={index}>
        <div className="itemcard__image-container">
          <img className="itemcard__image" src={card.img} alt="" />
        </div>
        <span className="itemcard__info">
          <span className="itemcard__name">
            <p className="itemcard__name--title">{card.title}</p>
            <p className="itemcard__name--model">{card.model}</p>
          </span>
          <span className="itemcard__price">{card.currency + card.cost}</span>
        </span>
        {Object.keys(card.options).map((option, index) => (
          <div className="itemcard__option-picker" key={index}>
            <h6 className="itemcard__subtitle">
              {convertToTitleCase(option)}
            </h6>
            <div className="itemcard__options">

              {card.ui_type === 'basic' ?
                <OptionList option={option} list={card.options[option]}></OptionList>
                :
                <OptionSelect option={option} list={card.options[option]}></OptionSelect>
              }

            </div>
          </div>
        ))}


        <button className="itemcard__addBtn"><img src={cartImage} style={{ "width": '13px', "height": '14px' }} alt="" /><p>Add to Bag</p></button>
      </div>
    )
    )


  )
}
