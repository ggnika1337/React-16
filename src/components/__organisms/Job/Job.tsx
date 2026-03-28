import Tags from "../../__atoms/Tags";

type JobProps = {
  img: string;
  isNew?: boolean;
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  tag: string[];
  onClick: () => void;
};

function Job({
  img,
  isNew,
  company,
  position,
  postedAt,
  contract,
  location,
  tag,
  onClick,
}: JobProps) {
  return (
    <>
      <div
        style={{
          borderLeft: isNew ? "5px solid #5CA5A5" : "none",
        }}
        className="w-full h-[152px] max-md:h-[240px] relative max-md:px-[18px] max-md:py-0 bg-white flex justify-between p-[32px] shadow-[0px_15px_20px_-5px_#0D718226] rounded-[5px]"
      >
        <div className="flex w-full justify-between max-md:absolute top-[-24px]">
          <div className="flex w-full gap-[30px] max-md:flex-col max-md:gap-[7px]">
            <img
              src={img}
              className="size-[88px] max-md:size-[48px] rounded-full"
            />
            <div className="flex w-full justify-between max-md:flex-col max-md:gap-[15px]">
              <div className="flex flex-col gap-[5px] max-md:gap-[7px]">
                <h1 className="text-[#5CA5A5] font-[700] text-[18px]">
                  {company}
                </h1>

                <div
                  style={{
                    display: isNew ? "flex" : "none",
                  }}
                >
                  <div className="flex gap-[8px]">
                    <div className="px-[8px] py-[5px] bg-[#5CA5A5]">
                      <h1 className="text-white font-[700] text-[14px]">
                        NEW!
                      </h1>
                    </div>
                    <div className="bg-[#2B3939] px-[8px] py-[5px]">
                      <h1 className="text-white font-[700] text-[14px]">
                        FEATURED
                      </h1>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="hover:text-[#5CA5A5] font-[700] text-[22px] cursor-pointer">
                    {position}
                  </span>
                  <div className="flex gap-[18px] text-[#7C8F8F] font-[500]">
                    <span>{postedAt}</span>
                    <h1>•</h1>
                    <span>{contract}</span>
                    <h1>•</h1>
                    <span>{location}</span>
                  </div>
                </div>

                <div className="max-md:block hidden h-[1px] w-[92%] bg-[#B7C4C4]"></div>
              </div>

              <div className="flex gap-[16px] flex-wrap">
                {tag.map((t: string, i: number) => (
                  <Tags key={i} tag={t} onClick={onClick} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
