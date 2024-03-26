import "./Styles.scss";

const App = () => {
  const buttons = [5, 10, 15, 25, 50, "Custom"];
  const error = "Can't be zero";

  return (
    <main>
      <div className="container">
        <div className="logo-container"></div>
        <div className="app">
          <div className="left">
            <div className="simple-section">
              <div className="labels">
                <p className="label-p">Bill</p>
                <p className="error">{error}</p>
              </div>
              <input type="number" placeholder="0" className="big-input" id="bill" />
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
                    >
                      {button}%
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="simple-section">
              <div className="labels">
                <p className="label-p">Number of People</p>
                <p className="error">{error}</p>
              </div>
              <input type="number" placeholder="0" className="big-input" id="people"/>
            </div>
          </div>

          <div className="right">
            <div className="sections">
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
            </div>

            <button className="reset">RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
