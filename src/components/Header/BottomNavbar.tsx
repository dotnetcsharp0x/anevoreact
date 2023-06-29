export default function BottomNavbar() {
    return (
        <nav className="bg-white border-gray-200 shadow-sm shadow-zinc-200 mb-3">
  <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex p-0 border-gray-100 rounded-lg bg-white flex-row md:space-x-8 mt-0 border-0">
        <li>
          <a href="#" className="block py-1 pl-3 pr-4 text-gray-600 bg-blue-700 rounded bg-transparent hover:text-blue-700" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-1 pl-3 pr-4 text-gray-600 bg-blue-700 rounded bg-transparent hover:text-blue-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-1 pl-3 pr-4 text-gray-600 bg-blue-700 rounded bg-transparent hover:text-blue-700">Services</a>
        </li>
        <li>
          <a href="#" className="block py-1 pl-3 pr-4 text-gray-600 bg-blue-700 rounded bg-transparent hover:text-blue-700">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-1 pl-3 pr-4 text-gray-600 bg-blue-700 rounded bg-transparent hover:text-blue-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}