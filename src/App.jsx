import "./Styles.scss";

const App = () => {
  const buttons = [5, 10, 15, 25, 50, "Custom"];

  return (
    <main>
      <div className="container">
        <div className="logo-container"></div>
        <div className="app">
          <div className="left">
            <div className="bill-section">
              <div className="labels">
                <p className="label-p">Bill</p>
                <p className="error">Please Type the Bill</p>
              </div>
              <input type="number" placeholder="0" />
            </div>

            <div className="tip-section">
              <label htmlFor="tips">Select Tip %</label>
              <div className="grid">
                {buttons.map((button) => {
                  return (
                    <button
                      id={button}
                      className="button"
                      value={button}
                      key={button}
                    >
                      {button}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="people-section">
              <div className="labels">
                <p className="label-p">Number of People</p>
                <p className="error">Can't be zero</p>
              </div>
              <input type="number" placeholder="0" />
            </div>
          </div>

          <div className="right">
            <div className="amount-section">
              <div className="text">
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <h1>$0.00</h1>
            </div>

            <div className="amount-section">
              <div className="text">
                <h2>Total</h2>
                <p>/ person</p>
              </div>
              <h1>$0.00</h1>
            </div>

            <button className="reset">RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
