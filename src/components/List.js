import React from 'react'


const List = ({items, removeItem}) => {

  return(
    <div className="grocery-List">
      {items.map(item => {
        const {id, title, completed} = item
        return (
        <li key={id} className="item list-group-item">
          <span className={`${completed === true ? 'completed' : ''}}`}>{title}</span>
          <span className='fa fa-trash' onClick={() => removeItem(id)}></span>
        </li>
        )
      })}
    </div>
  )
}

export default List