const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">ALX Stays</div>

      <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
        {["Rooms", "Mansion", "Countryside", "Penthouse", "Cabin"].map((type) => (
          <span key={type} className="text-sm text-gray-700 cursor-pointer hover:underline">
            {type}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1 text-sm"
        />
        <button className="text-sm text-blue-600 hover:underline">Sign In</button>
        <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;