import { useState } from "react";
import "./App.css";

function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [seriesDropdownOpen, setSeriesDropdownOpen] = useState(false);

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setDropdownOpen(false);
    console.log("Selected Grade:", grade);
  };

  const handleSeriesSelect = (series) => {
    setSelectedSeries(series);
    setSeriesDropdownOpen(false);
    console.log("Selected Series:", series);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSeriesDropdown = () => {
    setSeriesDropdownOpen(!seriesDropdownOpen);
  };
  return (
    <div className="App">
      <div className="container mx-auto shadow-lg rounded-lg">
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">GenAi</div>
          <div className="w-1/2"></div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            TS
          </div>
        </div>
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="relative inline-block text-left">
                <button
                  id="dropdownDefaultButton"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {selectedGrade ? `Grade ${selectedGrade}` : "Select Grade"}
                </button>

                {dropdownOpen && (
                  <div
                    id="dropdown"
                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                        <li key={grade}>
                          <button
                            onClick={() => handleGradeSelect(grade)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Grade {grade}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="relative inline-block text-left">
                <button
                  id="dropdownSeriesButton"
                  onClick={() => setSeriesDropdownOpen(!seriesDropdownOpen)}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {selectedSeries
                    ? `Series ${selectedSeries}`
                    : "Select Series"}
                </button>

                {seriesDropdownOpen && (
                  <div
                    id="dropdownSeries"
                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownSeriesButton"
                    >
                      {[1, 2, 3, 4, 5].map((series) => (
                        <li key={series}>
                          <button
                            onClick={() => handleSeriesSelect(series)}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Series {series}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to group everyone !
                </div>
                <div className="object-cover h-8 w-8 rounded-full">You</div>
              </div>
              <div className="flex justify-start mb-4">
                <div className="object-cover h-8 w-8 rounded-full">Boat</div>
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
            </div>
            <div className="py-5">
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
          <div className="w-2/5 border-l-2 px-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
