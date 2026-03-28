import "./App.css";
import Job from "./components/__organisms/Job/Job";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [isFilter, _setIsFilter] = useState(false);
  const filters: string[] = [];
  return (
    <>
      <div className="background w-full h-[156px] z-1"></div>

      <div className="container flex flex-col z-2 pt-[210px] gap-[40px] max-w-[1110px] relative">
        <div
          style={{
            display: isFilter ? "flex" : "none",
          }}
          className="px-[40px] max-w-[1110px] top-[100px] absolute py-[20px] w-full h-[72px] flex justify-between items-center bg-white shadow-[0px_15px_20px_-5px_#0D718226] rounded-[5px]"
        >
          <div>
            {filters.map(() => {
              return;
            })}
          </div>
          <h1
            onClick={() => {
              filters.length = 0;
              console.log(filters);
            }}
            className="font-[800] text-[20px] leading-[24px] text-[#5CA5A5] cursor-pointer"
          >
            Clear
          </h1>
        </div>
        {data.map((el, key) => {
          return (
            <div key={key}>
              <Job
                onClick={() => {
                  if (isFilter === true) {
                    _setIsFilter(false);
                  } else {
                    _setIsFilter(true);
                  }
                }}
                img={el.logo}
                company={el.company}
                position={el.position}
                contract={el.contract}
                location={el.location}
                postedAt={el.postedAt}
                tag={[el.role, el.level, ...el.languages, ...el.tools]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
