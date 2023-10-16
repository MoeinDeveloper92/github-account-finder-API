import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto p-10  border rounded-sm'>
            <div className='flex flex-col justify-between items-center py-5' >
                <h1 className='text-4xl text-left font-bold tracking-tighter mb-2'>Github finder</h1>
                <p className='text-center mt-5 md:text-left  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor at quibusdam, explicabo magnam iure illo consequatur hic cumque non mollitia veritatis, fugiat tempore dolorem in, nulla maxime? At, aspernatur?</p>
                <button className='mt-10 btn btn-info'>
                    <a href="https://github.com/MoeinDeveloper92" target='_blank'>Visit my Github</a>
                </button>
            </div>
        </div>
    )
}

export default About