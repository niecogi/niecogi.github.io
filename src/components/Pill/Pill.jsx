import React from 'react'
import './Pill.css'

export default function Pill({ name }) {
    return (
        <button className={'btn-pill'} id={name}>
            {name}
        </button>
    )
}