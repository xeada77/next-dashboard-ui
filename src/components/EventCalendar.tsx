"use client";
import Image from "next/image";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    time: "12:00 PM - 2:00 PM",
    title: "Math Exam",
    description: "Math exam for grade 10 students.",
  },
  {
    id: 2,
    time: "2:00 PM - 4:00 PM",
    title: "Science Fair",
    description: "Science fair for grade 8 students.",
  },
  {
    id: 3,
    time: "4:00 PM - 6:00 PM",
    title: "Parent-Teacher Meeting",
    description: "Meeting with parents and teachers for grade 9 students.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
