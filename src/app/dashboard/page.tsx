import Header from "../components/Header";
import Footer from "../components/Footer";
import AreaChartsCard from "../components/AreaChartsCard";
import PieChartsCard from "../components/PieChartsCard";

export default function Dashboard() {
    return (
        <>
            <Header />
            <main>
                <div className="md:container mx-auto">
                    <div className="flex overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-8 w-full h-full">
                            <h1 className="text-gray-900 me-2 font-bold text-lg"> eCommerce Dashboard </h1>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Inicio
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">Clientes visitados</h1>
                                    <AreaChartsCard />  
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg mt-5 p-4">
                                    <h1 className="text-lg text-gray-700 font-bold">Productos vendidos</h1>
                                    <PieChartsCard />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}