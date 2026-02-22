const annoucements = [
  {
    id: 1,
    date: "12/02/2026",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Donec vel sapien augue.",
  },
  {
    id: 2,
    date: "12/03/2026",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Donec vel sapien augue.",
  },
  {
    id: 3,
    date: "27/04/2026",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Donec vel sapien augue.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold my-4">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {annoucements.map((anc) => (
          <div
            className="p-5 rounded-md  odd:bg-lamaSky even:bg-lamaPurple"
            key={anc.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{anc.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {anc.date}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-400">{anc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
