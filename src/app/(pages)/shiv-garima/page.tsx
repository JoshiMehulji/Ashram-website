const pdfLinks = [
  {
    title: "2023",
    languages: [
      {
        name: "Hindi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/Ly5S0JQL",
      },
    ],
  },
  {
    title: "2024",
    languages: [
      {
        name: "Hindi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/Gihm0JLD",
      },
    ],
  },
  {
    title: "2025",
    languages: [
      {
        name: "Hindi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/2zpwmTpT",
      },
      {
        name: "Marathi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/SmJFVD4D",
      },
      {
        name: "English",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/OnB1BRpR",
      },
    ],
  },
  {
    title: "2026",
    languages: [
      {
        name: "Hindi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/6vA30bwD",
      },
      {
        name: "Marathi",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/3yATHTwD",
      },
      {
        name: "English",
        url: "https://mega.nz/folder/yrhyXayb#8xpQ0S7_IqU4ZuAkgQb27w/folder/GvBBlBzB",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <div className="h-[200px] bg-amber-300 flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          <blockquote className="text-2xl md:text-5xl font-serif italic mb-8 leading-relaxed text-red-500">
            Shiv Garima
          </blockquote>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-10 bg-amber-50">
        {pdfLinks.map((year, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border"
          >
            {/* Year Title */}
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {year.title}
            </h2>

            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {year.languages.map((lang, i) => (
                <a
                  key={i}
                  href={lang.url}
                  target="_blank"
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  {lang.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
