function Job({
  img,
  isNew,
  company,
  position,
  postedAt,
  contract,
  location,
  tags,
}) {
  return (
    <>
      <div
        style={{
          borderLeft: isNew ? "5px solid #5CA5A5" : "none",
        }}
        className="w-full h-[152px] bg-white flex justify-between p-[32px] shadow-[0px_15px_20px_-5px_#0D718226] rounded-[5px]"
      >
        <div className="flex w-full justify-between">
          <div className="flex w-full gap-[30px]">
            <img src={img} className="size-[88px] rounded-full" />
            <div className="flex flex-col gap-[5px]">
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
                    <h1 className="text-white font-[700] text-[14px]">NEW!</h1>
                  </div>
                  <div className="bg-[#2B3939] px-[8px] py-[5px]">
                    <h1 className="text-white font-[700] text-[14px]">
                      FEATURED
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[#5CA5A5] font-[700] text-[22px] cursor-pointer">
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
            </div>
            <div>
              <h1>{tags}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
