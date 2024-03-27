import "./Styles.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState("");
  const [percent, setPercent] = useState("");
  const [showError, setShowError] = useState("");
  const [billAndTip, setBillAndTip] = useState(0);

  const buttons = [5, 10, 15, 25, 50];
  const error = "Can't be zero";

  useEffect(() => {
    const billTotal = people ? bill / people : 0;
    setTotal(billTotal);

    const errorClass = bill && !people ? "show" : "";
    setShowError(errorClass);
  }, [bill, people]);

  const handleSelect = (button) => {
    setPercent(button);
  };

  useEffect(() => {
    const tipAmountCalculated = (bill * percent) / 100 / people;
    setTipAmount(tipAmountCalculated ? tipAmountCalculated : 0);
  }, [bill, percent, people]);

  useEffect(() => {
    const sum = tipAmount + total;
    setBillAndTip(sum ? sum : 0);
  });

  const refresh = () => {
    window.location.reload();
  };

  return (
    <main>
      <div className="container">
        <div className="logo-container"></div>
        <div className="app">
          <div className="left">
            <div className="simple-section">
              <div className="labels">
                <p className="label-p">Bill</p>
                <p className="error"></p>
              </div>
              <input
                type="number"
                placeholder="0"
                className="big-input"
                id="bill"
                onChange={(e) => {
                  setBill(e.target.value);
                }}
              />
            </div>

            <div className="tip-section">
              <p className="label-p">Select Tip %</p>
              <div className="grid">
                {buttons.map((button) => {
                  return (
                    <button
                      id={button}
                      className="button"
                      value={button}
                      key={button}
                      onClick={() => handleSelect(button)}
                    >
                      {button}%
                    </button>
                  );
                })}
                <input
                  type="number"
                  placeholder="Custom"
                  className="custom"
                  onChange={(e) => setPercent(parseInt(e.target.value))}
                  onClick={(e) => setPercent(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="simple-section">
              <div className="labels">
                <p className="label-p">Number of People</p>
                <p className={`error ${showError}`}>{error}</p>
              </div>
              <input
                type="number"
                placeholder="0"
                className="big-input"
                id="people"
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="right">
            <div className="sections">
              <div className="amount-section">
                <div className="text">
                  <h2>Tip Amount</h2>
                  <p>/ person</p>
                </div>
                <h1>${tipAmount.toFixed(2)}</h1>
              </div>

              <div className="amount-section">
                <div className="text">
                  <h2>Total</h2>
                  <p>/ person</p>
                </div>
                <h1>${billAndTip.toFixed(2)}</h1>
              </div>
            </div>

            <button className="reset" onClick={refresh}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
