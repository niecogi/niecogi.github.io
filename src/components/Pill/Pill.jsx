import React from 'react'
import './Pill.css'

export default function Pill({ name }) {
    return (
        <button class='btn-pill'>
            {name}
        </button>
    )
}