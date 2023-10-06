import React from 'react'
import Button from './Button'

const Header = ({onAdd,showAdd}) => {
  return (
    <div>
      <header className='header'>
        <h2>Add Vehicle Information?</h2>
        <Button  color={showAdd ? 'red' : 'green'} text={showAdd? 'Close' : 'Add'} onAdd={onAdd} />
      </header>
    </div>
  )
}

export default Header
