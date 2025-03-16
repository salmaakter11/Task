import React from 'react'
import Banner from './Banner'
import Category from './Category'
import HealthGoals from './HealthGoals'
import Convenient from './Convenient'
import Testimonials from './Testimonial'

const Header = () => {
    return (
        <>
            <Banner />
            <Category />
            <HealthGoals />
            <Convenient />
            <Testimonials />
        </>
    )
}

export default Header