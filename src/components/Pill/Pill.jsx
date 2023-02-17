import React from 'react'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiMaterialui, SiAntdesign } from 'react-icons/si'
import './Pill.css'

const technologies = {
    JavaScript: <IoLogoJavascript />,
    HTML: <IoLogoHtml5 />,
    CSS: <IoLogoCss3 />,
    React: <IoLogoReact />,
    MUI: <SiMaterialui />,
    AntD: <SiAntdesign />
}

export default function Pill({ name }) {
    return (
        <button className={'btn-pill'} id={name}>
            {technologies[name]}
            {` ${name}`}
        </button>
    )
}