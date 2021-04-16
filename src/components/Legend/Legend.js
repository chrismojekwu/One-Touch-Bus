import React from 'react'
import User from '../../img/marker-icon.png'
import Bus from '../../img/bus-icon.png'

function Legend() {
        return (
            <section className="legend">
                 <img className="legend-icon" src={User} alt="Icon for the users positon."/>Your Current Position
                 <img className="legend-icon" src={Bus} alt="Icon for any nearby buses."/>Bus (Click for Route Name and Destination)
            </section>
        )
}

export default Legend