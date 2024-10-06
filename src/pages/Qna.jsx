import { useState } from "react";
import dummydata from "../data/dummydata";

function Qna() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <section className="section section-qna grid grid-cols-12">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-4">
          <form className="form-search-questions">
            <input type="search" placeholder="Search feed" />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="box-qnatopics-left">
            <h2>TOPICS</h2>
            <ul>
              {dummydata.qnaTopics.map((qna, index) => (
                <li key={index}>
                  <button onClick={() => setIsSelected(index)}>
                    <span
                      className={
                        isSelected === index ? "font-bold" : "font-normal"
                      }
                    >
                      {qna.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-12 md:col-span-8">
          <div className="qna-box-tabs">
            <div className="topics-tabs-header">
              <h2>Topic XXX</h2>
              <select name="#" id="">
                <option value="#">Short by Popularity</option>
              </select>
            </div>
            <div className="accordion" id="accordionExample">
              {dummydata.qnaTopics.map((qna, index) => (
                <ul className="accordion-item" key={index}>
                  <li>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse${index}`}
                    >
                      {qna.title}
                    </button>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${
                        index === isSelected ? "show" : ""
                      }`}
                      aria-labelledby={`heading-${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <p className="qna-answer">{qna.answer}</p>
                      <p className="qna-questions-updated">
                        {qna.questionsUpdated}
                      </p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn-return">RETURN TO COURSE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Qna;
