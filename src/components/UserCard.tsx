import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="">
        <div className="flex justify-between items-center">
          <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
            2025/26
          </span>
          <Image
            src="/more.png"
            alt="More"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h1 className="text-sm font-medium capitalize text-gray-400">
          {type}s
        </h1>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default UserCard;
