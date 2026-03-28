type TagsProps = {
  tag: string;
  onClick: () => void;
};

function Tags({ tag, onClick }: TagsProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="bg-[#5ca5a52c] hover:bg-[#5CA5A5] h-[32px] hover:text-white text-[#5CA5A5] rounded-[4px] p-[8px] flex items-center justify-center"
      >
        <h1>{tag}</h1>
      </div>
    </>
  );
}

export default Tags;
