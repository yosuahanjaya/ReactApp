import React from 'react'

export default function Header() {
    return (
        <div style={ headerStyle }>
            <h1>Todo List</h1>
        </div>
    )
}

// Style
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
