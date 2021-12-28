import React from 'react';

// icons
import Quotes from "../assets/quotes.svg"

const Review = ({ item, index, itemIndex, data }) => {

    let position = "next_slide"

    if (itemIndex === index) {
        position = "active_slide"
    }
    else if (itemIndex === index - 1 ||
        (index === 0 && itemIndex === data.length - 1)
    ) {
        position = "last_slide"
    }
    return (
        <article className={position}>
            <img className='avatar' src={item.image} alt={`${item.name} profile`} />
            <h4 className='name'>{item.name}</h4>
            <p className='profession'>{item.title}</p>
            <p className='info'>{item.quote}</p>
            <img className='qoutes' src={Quotes} alt='qoutes' />
        </article>
    );
};

export default Review;