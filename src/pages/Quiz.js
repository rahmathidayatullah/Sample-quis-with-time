import React, { useState } from "react";
import { quiz as quizData } from "components/quiz/fakeData";

export default function Quiz() {
  // state currentIndex index from array
  const [currentIndex, setCurrentIndex] = useState(0);

  // state menampung data from dataAPI/fakData
  const [quiz, setQuiz] = useState(quizData);

  // destruct data from quiz /fake data
  const { id, quistion, option } = quiz[currentIndex];

  // function btn next
  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  // function btn previus
  const previusQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  // menampung data selectAnswer / choicemen
  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              option: option.map((items, index) =>
                index === indexOptionSelected
                  ? { ...items, selected: true }
                  : { ...items, selected: false }
              ),
            }
          : item
      )
    );
  };

  return (
    <div className="pt-12 px-5">
      <h2 className="text-center mb-5 text-2xl font-semibold mt-5">
        Quiz Screen
      </h2>

      {/* card */}
      <div className="shadow-lg border">
        {/* card head */}
        <div className="border-b p-4 font-semibold">
          {currentIndex + 1}. {quistion}
        </div>
        {/* card body */}
        <div className="border p-4">
          {option.map((item, index) => {
            return (
              <ul key={index}>
                <li className="mt-2">
                  <div className="flex items-center">
                    <div
                      className={`h-7 w-7 ${
                        item?.selected ? "bg-blue-700" : "bg-red-700"
                      } rounded-full mr-4`}
                      onClick={() => selectOption(currentIndex, index)}
                    ></div>
                    <p>{item.title}</p>
                  </div>
                </li>
              </ul>
            );
          })}
          <div className="flex items-center mt-4 border-t pt-4">
            <button
              className={`px-4 py-2 text-white rounded-lg mr-2 duration-200 focus:outline-none outline-none ${
                currentIndex === 0
                  ? " bg-blue-500 bg-opacity-80 cursor-not-allowed"
                  : "bg-blue-500 "
              }`}
              onClick={() => previusQuestion()}
            >
              Previus
            </button>
            <button
              className={`px-4 py-2 text-white rounded-lg mr-2 duration-200 focus:outline-none outline-none ${
                quiz.length - 1 === currentIndex
                  ? " bg-blue-500 bg-opacity-80 cursor-not-allowed"
                  : "bg-blue-500 "
              }`}
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* navigasi soal */}
      <h1 className="text-lg font-semibold mt-5 mb-4">Navigasi Soal !</h1>
      <div
        className="grid grid-cols-10 gap-3 shadow-lg bg-white p-4 border rounded-lg"
        style={{ maxWidth: "32rem" }}
      >
        {quiz.map((items, index) => {
          return (
            <div className="col-span-1 flex item-center justify-center w-full">
              <div
                className={`border border-gray-500 rounded-lg px-3 py-1 cursor-pointer hover:bg-opacity-80 duration-200 ${
                  index === currentIndex
                    ? "bg-blue-500 text-white"
                    : items?.selected
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <p>{index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
