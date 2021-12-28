import React, { useEffect, useState } from "react";

// components
import Review from "./components/Review";

// data
import people from './data/data';

// icons
import Right from "./assets/arrow-right.svg"
import Left from "./assets/arrow-left.svg"

function App() {

  const [data, setData] = useState(people)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);

    return () => clearInterval(slider)
  }, [index])

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    else if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  return (
    <section>
      <div>
      <h1 className="title"><span>/</span>Reviews</h1>
      </div>

      <div className="section_center">
        {data.map((item, itemIndex) => <Review key={item.id} data={data} item={item} itemIndex={itemIndex} index={index} />)}
        <button className="prev_btn" onClick={() => setIndex(index - 1)}><img src={Left} alt="arrow left" /></button>
        <button className="next_btn" onClick={() => setIndex(index + 1)}><img src={Right} alt="arrow right" /></button>
      </div>
    </section>
  );
}

export default App;
