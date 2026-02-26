import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex p-4 flex-col gap-4 xl:flex-row">
      {/*LEFT*/}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6  px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="w-36 h-36 rounded-full object-cover"
                alt="Teacher"
                width={144}
                height={144}
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="Blood Type"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">B+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="Date of Birth"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">01/01/2000</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="Email" width={14} height={14} />
                  <span className="ml-1">leonardsnyder@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span className="ml-1">+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/*SMALL CARDS */}
          <div className="flex-1 flex flex-wrap gap-4 justify-between">
            {/*CARD*/}
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 rounded-md flex gap-4 ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 rounded-md flex gap-4 ">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 rounded-md flex gap-4 ">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="bg-white w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] p-4 rounded-md flex gap-4 ">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/*RIGHT*/}
      <div className="w-full xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
