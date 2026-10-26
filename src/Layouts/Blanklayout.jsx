import React from 'react'
import { Outlet } from 'react-router-dom'

function Blanklayout() {
    return (
        <section className='min-h-screen w-full '>
            <Outlet />
        </section>
    )
}

export default Blanklayout