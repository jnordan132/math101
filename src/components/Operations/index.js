import { useState } from "react";

function Operations() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operationType, setOperationType] = useState("");

  const handleValue1 = (event) => {
    setValue1(event.target.value);
  };
  const handleValue2 = (event) => {
    setValue2(event.target.value);
  };
  const handleOperationType = (event) => {
    setOperationType(event.target.value);
  };

  function doMath(event) {
    let element = event.target;
    if (element.textContent === "+") {
      console.log(parseInt(value1) + parseInt(value2));
    }
    if (element.textContent === "-") {
      console.log(parseInt(value1) - parseInt(value2));
    }
    if (element.textContent === "*") {
      console.log(parseInt(value1) * parseInt(value2));
    }
    if (element.textContent === "/") {
      console.log(parseInt(value1) / parseInt(value2));
    }
  }

  return (
    <main>
      <div className="operations">
        <ul className="operations-list">
          <li className="operations-list-item">
            <button className="add" onClick={doMath}>
              +
            </button>
          </li>
          <li className="operations-list-item">
            <button className="subtract" onClick={doMath}>
              -
            </button>
          </li>
          <li className="operations-list-item">
            <button className="multiply" onClick={doMath}>
              *
            </button>
          </li>
          <li className="operations-list-item">
            <button className="divide" onClick={doMath}>
              /
            </button>
          </li>
        </ul>
      </div>
      <div className="input">
        <ul className="input-list">
          <li className="input-item1">
            <input
              placeholder="Num1"
              value={value1}
              onChange={handleValue1}
            ></input>
          </li>
          <li
            className="operation-value"
            value={value2}
            onChange={handleOperationType}
          ></li>
          <li className="input-item2">
            <input
              placeholder="Num2"
              value={value2}
              onChange={handleValue2}
            ></input>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Operations;
