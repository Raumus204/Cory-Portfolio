export default function Portfolio() {
    return (
      <div>
      <h1>Portfolio</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <a href="https://agatha-knights-game.onrender.com" className="card-link"> 
                <div className="card">
                  <img src="agatha-website.png" className="card-img-top" alt="employee tracker img"></img>
                  <div className="card-body">
                    <h5 className="card-title" >Agatha Knights</h5>
                    <p className="card-text">
                            DND styled character creation / mini game. GitHub Link:{" "}
                            <a
                              href="https://github.com/Raumus204/Agatha-Knights"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Agatha-Knights
                            </a>
                          </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/Raumus204/RPSLS" className="card-link">
                <div className="card">
                  <img src="RPSLS.png" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Rock Paper Scissors Lizzard Spock</h5>
                    <p className="card-text">Simple html/css/js game</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/Raumus204/Employee-Tracker" className="card-link"> 
                <div className="card">
                  <img src="employee-tracker.png" className="card-img-top" alt="employee tracker img"></img>
                  <div className="card-body">
                    <h5 className="card-title">Employee Tracker</h5>
                    <p className="card-text">Creates a database to organize Departments, Roles, and Employees</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
            <a href="https://github.com/Raumus204/README-Generator" className="card-link">
                <div className="card">
                  <img src="readme-generator.png" className="card-img-top" alt="read me generator"></img>
                  <div className="card-body">
                    <h5 className="card-title">README Generator</h5>
                    <p className="card-text">A README generator that generates a usable README.md file</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
            <a href="https://github.com/Raumus204/Vehicle-Builder" className="card-link">
                <div className="card">
                  <img src="Vehicle-Builder.png" className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Vehicle Builder</h5>
                    <p className="card-text">Makes a Car, Truck, or Motorcycle with color, make, model, year, weight, towing and wheel type. Has start, accelerate, decelerate, stop vehicle type functions.</p>
                  </div>
                </div>
              </a>
            </div>
          
        </div>
      </div>
    );
  }
  