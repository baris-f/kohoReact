import Image from "next/image";
import Grid from "@/components/grid";

type Props = {
    children: JSX.Element
}

const Search: React.FC<Props> = ({children}) => {
    return (
        <div className="mb-6">
            <div className="text-center pb-3 md:pb-3">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out">Find your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Korean Home</span></h1>
            <p className="text-xl text-gray-500 mb-5"> One-room • Sharehouse • Goshiwon</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4 mt-2" data-aos="zoom-y-out" data-aos-delay="150">The go-to platform for housing in Korea for students, workers, long-term stayers. Through various housing options find your next aparment</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                
              </div>
            </div>
          </div>
            <div className="mt-3 sm:mt-6 mx-auto max-w-xl relative">
                <form>
                    <div
                        className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                        <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                            {/*
                            <label htmlFor="hs-hero-name-1" className="block text-sm font-medium dark:text-white"><span
                                className="sr-only">Your name</span></label>
                            */}
                            <input type="text" id="hs-hero-name-1"
                                   className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400"
                                   placeholder="Location"/>
                        </div>
                        
                        <div
                            className="pt-0 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
                            <label htmlFor="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span
                                className="sr-only">Your email address</span></label>
                            <input type="email" id="hs-hero-email-1"
                                   className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400"
                                   placeholder="Price"/>
                        </div>
                        <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
                            <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800"
                               href="#">
                                Search
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            {children}
            <div className="mt-3 sm:mt-10">
                <a className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                   href="#">
                    <svg className="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke-width="1.5" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                    One-room
                </a>
                <a className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                   href="#">
                    <svg className="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path
                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path
                             d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    </svg>
                    
                    Sharehouse
                </a>
                <a className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                   href="#">
                    <svg className="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path
                           d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                    </svg>
                    Goshiwon
                </a>
                

               
                {/*
                <a className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                   href="#">
                    <svg className="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                        <path
                            d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg>
                    Officetel
                </a>
                
                <a className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                   href="#">
                    <svg className="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         viewBox="0 0 16 16">
                        <path
                            d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"/>
                    </svg>
                    Under a bridge
                </a>
                */}
            </div>
        </div>
    )
}

export default Search;


