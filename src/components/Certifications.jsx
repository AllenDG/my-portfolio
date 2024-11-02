export default function Certifications() {
  return (
    <section className="border border-black-500 p-4 rounded-lg max-w-xl col-span-3 md:col-span-1 row-span-1 md:row-span-2 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Certifications</h2>
        <button className="hover:underline text-xs">View All</button>
      </div>
      <div className="space-y-4">
        {/* Individual Certification Rows */}
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div>
            <h3 className="text-xs font-bold">UI/UX Fundamentals</h3>
            <p className="text-xs text-gray-500">Date: January 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div>
            <h3 className="text-xs font-bold">Frontend Development</h3>
            <p className="text-xs text-gray-500">Date: March 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div>
            <h3 className="text-xs font-bold">React Mastery</h3>
            <p className="text-xs text-gray-500">Date: June 2023</p>
          </div>
        </button>
        <button className="w-full text-left py-3 px-4 border border-black-500 rounded-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div>
            <h3 className="text-xs font-bold">JavaScript Essentials</h3>
            <p className="text-xs text-gray-500">Date: September 2023</p>
          </div>
        </button>
      </div>
    </section>
  );
}
