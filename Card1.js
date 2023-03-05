import React from "react";
import "./Card.css";
import { useState } from "react";
import data from "./data";
const Card1 = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");
  const [store, setStore] = useState([]);
  const [score, setScore] = useState(-1);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  let count = 0;
  const calculateResult = (e) => {
    store.map((value) => {
      data.find((ele) => {
        if (ele?.Question === value.Question && ele?.Answer === value.Answer)
          count++;
      });
    });

    setScore(count);
    setShow(true);
    e.target.disabled = true;
  };
  return (
    <div>
        
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <button
          style={{
            padding: 15,
            background: "#f7c19b",
            color: "black",
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            width: 500,
          }}
          onClick={() => setDisplay(true)}
        >
          Start Quiz
        </button>
      </div>

      {display && (
        <div>
          <div className="row1">
            <div className="design">
              <h1>Who is the father of our nation?</h1>
              <div className="buttons">
                {!name1 ? (
                  <button
                    id="1"
                    onClick={() => {
                      setName1("Mahatma Gandhi");
                      setStore([
                        ...store,
                        {
                          Question: "Who is the father of our nation?",
                          Answer: "Mahatma Gandhi",
                        },
                      ]);
                      document.getElementById("1").disabled = true;
                    }}
                  >
                    Mahatma Gandhi
                  </button>
                ) : (
                  <button id="1" disabled className="fade">
                    Mahatma Gandhi
                  </button>
                )}

                {!name1 ? (
                  <button
                    id="2"
                    onClick={() => {
                      setName1("Jawaharlal Nehru");
                      setStore([
                        ...store,
                        {
                          Question: "Who is the father of our nation?",
                          Answer: "Jawaharlal Nehru",
                        },
                      ]);
                      document.getElementById("2").disabled = true;
                    }}
                  >
                    Jawaharlal Nehru
                  </button>
                ) : (
                  <button id="2" disabled className="fade">
                    Jawaharlal Nehru
                  </button>
                )}

                {!name1 ? (
                  <button
                    id="3"
                    onClick={() => {
                      setName1("Donald Trump");
                      setStore([
                        ...store,
                        {
                          Question: "Who is the father of our nation?",
                          Answer: "Donald Trump",
                        },
                      ]);
                      document.getElementById("3").disabled = true;
                    }}
                  >
                    Donald Trump
                  </button>
                ) : (
                  <button id="3" disabled className="fade">
                    Donald Trump
                  </button>
                )}

                {!name1 ? (
                  <button
                    id="4"
                    onClick={() => {
                      setName1("Barrack Obama");
                      setStore([
                        ...store,
                        {
                          Question: "Who is the father of our nation?",
                          Answer: "Barrack Obama",
                        },
                      ]);
                      document.getElementById("4").disabled = true;
                    }}
                  >
                    Barrack Obama
                  </button>
                ) : (
                  <button id="4" disabled className="fade">
                    Barrack Obama
                  </button>
                )}
              </div>
            </div>
            <div className="design">
              <h1>What color is are the leaves?</h1>
              <div className="buttons">
                {!name2 ? (
                  <button
                    id="5"
                    onClick={() => {
                      setName2("Blue");
                      setStore([
                        ...store,
                        {
                          Question: "What color is are the leaves?",
                          Answer: "Blue",
                        },
                      ]);
                      document.getElementById("5").disabled = true;
                    }}
                  >
                    Blue
                  </button>
                ) : (
                  <button id="5" disabled className="fade">
                    Blue
                  </button>
                )}

                {!name2 ? (
                  <button
                    id="6"
                    onClick={() => {
                      setName2("Red");
                      setStore([
                        ...store,
                        {
                          Question: "What color is are the leaves?",
                          Answer: "Red",
                        },
                      ]);
                      document.getElementById("6").disabled = true;
                    }}
                  >
                    Red
                  </button>
                ) : (
                  <button id="6" disabled className="fade">
                    Red
                  </button>
                )}

                {!name2 ? (
                  <button
                    id="7"
                    onClick={() => {
                      setName2("Yellow");
                      setStore([
                        ...store,
                        {
                          Question: "What color is are the leaves?",
                          Answer: "Yellow",
                        },
                      ]);
                      document.getElementById("7").disabled = true;
                    }}
                  >
                    Yellow
                  </button>
                ) : (
                  <button id="7" disabled className="fade">
                    Yellow
                  </button>
                )}

                {!name2 ? (
                  <button
                    id="8"
                    onClick={() => {
                      setName2("Green");
                      setStore([
                        ...store,
                        {
                          Question: "What color is are the leaves?",
                          Answer: "Green",
                        },
                      ]);
                      document.getElementById("8").disabled = true;
                    }}
                  >
                    Green
                  </button>
                ) : (
                  <button id="8" disabled className="fade">
                    Green
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="design">
              <h1>What color is the sky?</h1>
              <div className="buttons">
                {!name3 ? (
                  <button
                    id="9"
                    onClick={() => {
                      setName3("Blue");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Blue",
                        },
                      ]);
                      document.getElementById("9").disabled = true;
                    }}
                  >
                    Blue
                  </button>
                ) : (
                  <button id="9" disabled className="fade">
                    Blue
                  </button>
                )}

                {!name3 ? (
                  <button
                    id="10"
                    onClick={() => {
                      setName3("Red");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Red",
                        },
                      ]);

                      document.getElementById("10").disabled = true;
                    }}
                  >
                    Red
                  </button>
                ) : (
                  <button id="10" disabled className="fade">
                    Red
                  </button>
                )}

                {!name3 ? (
                  <button
                    id="11"
                    onClick={() => {
                      setName3("Yellow");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Yellow",
                        },
                      ]);

                      document.getElementById("11").disabled = true;
                    }}
                  >
                    Yellow
                  </button>
                ) : (
                  <button id="11" disabled className="fade">
                    Yellow
                  </button>
                )}

                {!name3 ? (
                  <button
                    id="12"
                    onClick={() => {
                      setName3("Green");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Green",
                        },
                      ]);

                      document.getElementById("12").disabled = true;
                    }}
                  >
                    Green
                  </button>
                ) : (
                  <button id="12" disabled className="fade">
                    Green
                  </button>
                )}
              </div>
            </div>

            <div className="design">
              <h1>What color is the sky?</h1>
              <div className="buttons">
                {!name4 ? (
                  <button
                    id="13"
                    onClick={() => {
                      setName4("Blue");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Blue",
                        },
                      ]);
                      document.getElementById("13").disabled = true;
                    }}
                  >
                    Blue
                  </button>
                ) : (
                  <button id="13" disabled className="fade">
                    Blue
                  </button>
                )}

                {!name4 ? (
                  <button
                    id="14"
                    onClick={() => {
                      setName4("Red");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Red",
                        },
                      ]);

                      document.getElementById("14").disabled = true;
                    }}
                  >
                    Red
                  </button>
                ) : (
                  <button id="14" disabled className="fade">
                    Red
                  </button>
                )}

                {!name4 ? (
                  <button
                    id="15"
                    onClick={() => {
                      setName4("Yellow");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Yellow",
                        },
                      ]);

                      document.getElementById("15").disabled = true;
                    }}
                  >
                    Yellow
                  </button>
                ) : (
                  <button id="15" disabled className="fade">
                    Yellow
                  </button>
                )}

                {!name4 ? (
                  <button
                    id="16"
                    onClick={() => {
                      setName4("Green");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the sky?",
                          Answer: "Green",
                        },
                      ]);
                      document.getElementById("16").disabled = true;
                    }}
                  >
                    Green
                  </button>
                ) : (
                  <button id="16" disabled className="fade">
                    Green
                  </button>
                )}
              </div>
            </div>

            <div className="design">
              <h1>What color is the fire?</h1>
              <div className="buttons">
                {!name5 ? (
                  <button
                    id="17"
                    onClick={() => {
                      setName5("Blue");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the fire?",
                          Answer: "Blue",
                        },
                      ]);
                      document.getElementById("17").disabled = true;
                    }}
                  >
                    Blue
                  </button>
                ) : (
                  <button id="17" disabled className="fade">
                    Blue
                  </button>
                )}

                {!name5 ? (
                  <button
                    id="18"
                    onClick={() => {
                      setName5("Red");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the fire?",
                          Answer: "Red",
                        },
                      ]);
                      document.getElementById("18").disabled = true;
                    }}
                  >
                    Red
                  </button>
                ) : (
                  <button id="18" disabled className="fade">
                    Red
                  </button>
                )}

                {!name5 ? (
                  <button
                    id="19"
                    onClick={() => {
                      setName5("Yellow");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the fire?",
                          Answer: "Yellow",
                        },
                      ]);
                      document.getElementById("19").disabled = true;
                    }}
                  >
                    Yellow
                  </button>
                ) : (
                  <button id="19" disabled className="fade">
                    Yellow
                  </button>
                )}

                {!name5 ? (
                  <button
                    id="20"
                    onClick={() => {
                      setName5("Green");
                      setStore([
                        ...store,
                        {
                          Question: "What color is the fire?",
                          Answer: "Green",
                        },
                      ]);
                      document.getElementById("20").disabled = true;
                    }}
                  >
                    Green
                  </button>
                ) : (
                  <button id="20" disabled className="fade">
                    Green
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {store.length > 4 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              margin: 20,
              padding: 10,
              backgroundColor: "green",
            }}
            onClick={calculateResult}
          >
            Show Results
          </button>
        </div>
      )}
      {show && (
        <div
          style={{
            padding: 15,
            background: "orange",
            color: "black",
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          You have answered {score}/5 correctly
        </div>
      )}
    </div>
  );
};

export default Card1;