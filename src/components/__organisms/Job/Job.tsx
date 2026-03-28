import Tags from "../../__atoms/Tags";

type JobProps = {
  img: string;
  isNew: boolean;
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
        className="w-full max-md:min-h-[200px] relative max-md:px-[18px] max-md:pb-[18px] max-md:py-0 bg-white flex justify-between p-[32px] shadow-[0px_15px_20px_-5px_#0D718226] rounded-[5px]"
      >
        <div className="flex w-full justify-between max-md:mt-[-24px]">
          <div className="flex w-full gap-[30px] max-md:flex-col max-md:gap-[7px]">
            <img
              src={img}
              className="size-[88px] max-md:size-[48px] rounded-full"
            />
            <div className="flex gap-[15px] w-full justify-between max-md:flex-col">
              <div className="flex flex-col gap-[5px] max-md:gap-[7px]">
                <div className="flex gap-[15px]">
                  <h1 className="text-[#5CA5A5] font-[700] text-[18px]">
                    {company}
                  </h1>

                  <div
                    style={{
                      display: isNew ? "flex" : "none",
                    }}
                  >
                    <div className="flex gap-[8px]">
                      <div className="px-[8px] py-[5px] bg-[#5CA5A5] rounded-[12px] flex justify-center items-center">
                        <h1 className="text-white font-[700] text-[14px]">
                          NEW!
                        </h1>
                      </div>
                      <div className="bg-[#2B3939] px-[8px] py-[5px] rounded-[12px] flex justify-center items-center">
                        <h1 className="text-white font-[700] text-[14px]">
                          FEATURED
                        </h1>
                      </div>
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
                {/* gray line on mobile */}
                <div className="max-md:block hidden h-[1px] w-[100%] bg-[#B7C4C4]"></div>
              </div>

              <div className="flex gap-[16px] flex-wrap">
                {tag.map((tag: string, key: number) => (
                  <Tags key={key} tag={tag} onClick={onClick} />
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
