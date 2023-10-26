export default function Header() {
    return (
        <>
            <header className="w-full">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-700">Flowbite</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" className="text-gray-800 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"> Conectar Billetera </a>
                            <a href="#" className="text-white bg-blue-500 hover:bg-gray-300 hover:text-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Empezar</a>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a href="/marketplace" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                        Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}