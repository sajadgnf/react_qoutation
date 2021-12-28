import React, { useState } from "react"

// data
import people from "../data/data"

// icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {

    const [index, setIndex] = useState(0)

    const checkNumber = number => {
        if (number < 0) {
            return people.length - 1
        }

        if (number > people.length - 1) {
            return 0
        }

        return number
    }

    const prevHandler = () => {
        setIndex(index => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const nextHandler = () => {
        setIndex(index => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })

    }

    const randomHandler = () => {
        let randomNum = Math.floor(Math.random() * people.length)
        if (randomNum === index) {
            randomNum = index + 1
        }

        setIndex(checkNumber(randomNum))
    }



    const { image, job, name, text } = people[index]

    return (
        <article className="container">
            <div className="image_container">
                <img src={image} alt="profile" />
                <span className="quotes"><FaQuoteRight /></span>
            </div>

            <h3 className="author">{name}</h3>
            <p className="job">{job.toUpperCase()}</p>
            <p className="info">{text}</p>

            <div className="buttons_container">
                <button onClick={prevHandler}><FaChevronLeft /></button>
                <button onClick={nextHandler}><FaChevronRight /></button>
            </div>

            <button className="randomBtn" onClick={randomHandler}>Surprise Me</button>
        </article>
    )
}

export default Review