import React from 'react'
import Link from './Link'

function Sidebar() {

    const links = [
        { label: "Dropdown", path: "/dropdown" },
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/buttons" },
    ]


    const renderedItem = links && links.map((link) => {
        return (
            <Link key={link.label} to={link.path}>{link.label}</Link>
        )
    })

    return (
        <div>
            {renderedItem}
        </div>
    )
}

export default Sidebar