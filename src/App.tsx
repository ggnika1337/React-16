import "./App.css";
import Job from "./components/__organisms/Job/Job";
import data from "../data.json";
import { useState } from "react";
import X from "./assets/images/X.svg";

function App() {
  const [isFilter, _setIsFilter] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  function handleFilters(e: React.MouseEvent<HTMLDivElement>) {
    _setIsFilter(true);
    const value = e.currentTarget.textContent;

    let isInArray: boolean = false;

    if (!value) return;

    // check if array already has said filter
    if (filters.includes(value)) {
      isInArray = true;
    }
    // if array doesnt have filter, add
    if (isInArray !== true) {
      setFilters([...filters, value]);
      console.log(filters);
    }
  }

  const filtered = data.filter(
    (el) =>
      filters.every((tag) => el.languages.includes(tag)) ||
      filters.every((tag) => el.tools.includes(tag)) ||
      filters.every((tag) => el.role.includes(tag)) ||
      filters.every((tag) => el.level.includes(tag)),
  );

  return (
    <>
      <div className="background w-full h-[156px] z-1"></div>

      <div className="container flex flex-col z-3 pt-[210px] gap-[40px] max-w-[1110px] relative">
        <div
          style={{
            display: isFilter ? "flex" : "none",
          }}
          className="px-[40px] max-md:px-[20px] max-md:py-[20px] max-w-[1110px] top-[100px] absolute py-[20px] w-full flex justify-between items-center bg-white shadow-[0px_15px_20px_-5px_#0D718226] rounded-[5px] h-auto"
        >
          <div className="w-full h-[32px] flex gap-[16px] flex-wrap">
            {filters.map((text: string, key: number) => {
              return (
                <div
                  className="flex items-end bg-[#5ca5a52d] pl-[10px] rounded-[10px] gap-[11px]"
                  key={key}
                >
                  <h1 className="text-[#5CA5A5] font-[700] text-[16px] mb-[3px]">
                    {text}
                  </h1>
                  <div
                    onClick={() => {
                      setFilters(filters.filter((tag) => tag));
                    }}
                    className="w-[32px] h-full flex justify-center rounded-r-[10px] items-center bg-[#5CA5A5] hover:bg-[#2B3939]"
                  >
                    <img src={X} />
                  </div>
                </div>
              );
            })}
          </div>
          <h1
            onClick={() => {
              filters.length = 0;
              _setIsFilter(false);
            }}
            className="font-[800] text-[20px] leading-[24px] hover:text-[#5CA5A5] text-[#7C8F8F] cursor-pointer"
          >
            Clear
          </h1>
        </div>
        {filtered.map((el, key) => {
          return (
            <div key={key}>
              <Job
                onClick={handleFilters}
                img={el.logo}
                company={el.company}
                position={el.position}
                contract={el.contract}
                location={el.location}
                postedAt={el.postedAt}
                tag={[el.role, el.level, ...el.languages, ...el.tools]}
                isNew={el.new}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
