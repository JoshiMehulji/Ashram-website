const ashrams = [
  {
    name: "Kashi Shivpuri Ashram",
    image: "dfsf",
    address: "Intali kheda, Salumbar, Rajasthan, 313026",
    getDirectionLink: "safsd",
  },
  {
    name: "Vrindavan Ashram",
    image: "dfsf",
    address: "Mu. Karand Gaon, Badlapur, Dist. Thane, Maharashtra",
    getDirectionLink: "safsd",
  },
  {
    name: "Shiv Trailokya Ashram",
    image: "dfsf",
    address:
      "223, Agastkar Tekri, opp. Aadarsh Vidhyalaya Badlapur, Maharashtra 421503",
    getDirectionLink: "safsd",
  },
  {
    name: "Shiv Trilochan Ashram",
    image: "dfsf",
    address: "Post Chapora, Waya - Ratanpur, Teh. Kota, Dist. Bilaspur, 495442, Chhattisgarh",
    getDirectionLink: "safsd",
  },
  {
    name: "Shiv Tripur Ashram",
    image: "dfsf",
    address:
      "Wadiya Colony Banswara, Rajasthan 327001",
    getDirectionLink: "https://maps.app.goo.gl/toAy3xmRBrHsnJ4U7",
  },
];

const page = () => {
  return (
    <div>
      <div className="h-[200px] bg-amber-300 flex justify-center items-center">
        <h2 className="text-2xl font-bold">
          <blockquote className="text-2xl md:text-5xl font-serif italic mb-8 leading-relaxed text-red-500">
            Ashrams
          </blockquote>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 p-4 bg-amber-100">
        {ashrams.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>

              <p className="text-sm text-gray-600 mb-4">{item.address}</p>

              <a
                href={item.getDirectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-500 px-4 py-2 rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
