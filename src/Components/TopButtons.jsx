import React from 'react'

const TopButtons = ({ setQuery }) => {

    const cities = [{

        id: 1,
        title: "London"
    },
    {

        id: 2,
        title: "Sydney"
    },
    {

        id: 3,
        title: "Tokyo"
    },
    {

        id: 4,
        title: "Toronto"
    },
    {

        id: 5,
        title: "Paris"
    },

    ]

    return (
        <div className='flex text-center items-center justify-around my-6'>
            {cities.map(city => {
                return (
                    <div key={city.id}>
                        <button className='text-white text-lg font-medium' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TopButtons