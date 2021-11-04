const Results = () => {
    return (
        <>
            <div class="border w-72 md:w-96 relative flex flex-col mx-auto shadow-lg m-5">
                <div class="w-full flex m-3 ml-4 text-black dark:text-white">
                    <img class="w-28 h-28 p-1 bg-white rounded-full" src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="" />
                    <div class="title mt-9 ml-3 font-bold flex flex-col">
                        <div class="break-words">GitHub Profile</div>
                        <div class="font-semibold text-sm italic dark">Account</div>
                    </div>
                </div>
                <div class="absolute bottom-0 font-bold right-0 text-xs text-gray-900 dark:text-gray-300 space-x-0 my-3.5 mr-3">
                    <a href="https://github.com/MagicPojska" target="_blank" rel="noreferrer" class="border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Profile</a>
                </div>
            </div>



            <div className="sm:px-36 lg:px-96 py-1 flex flex-wrap justify-between space-y-6 lg:space-y-3">
                <div className="border-solid border p-2 border-black dark:border-gray-600 w-full">
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <p className="text-sm">Link to repo- placeholder</p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">Title</p>
                    </a>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ipsum officiis, accusamus sint architecto fugit aliquam perferendis maxime? Ipsam!
                    </p>
                </div>
            </div>
            <div className="sm:px-36 lg:px-96 py-1 flex flex-wrap justify-between space-y-6 lg:space-y-3">
                <div className="border-solid border p-2 border-black dark:border-gray-600 w-full">
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <p className="text-sm">Link to repo- placeholder</p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">Title</p>
                    </a>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ipsum officiis, accusamus sint architecto fugit aliquam perferendis maxime? Ipsam!
                    </p>
                </div>
            </div>
            <div className="sm:px-36 lg:px-96 py-1 flex flex-wrap justify-between space-y-6 lg:space-y-3">
                <div className="border-solid border p-2 border-black dark:border-gray-600 w-full">
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <p className="text-sm">Link to repo- placeholder</p>
                        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">Title</p>
                    </a>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ipsum officiis, accusamus sint architecto fugit aliquam perferendis maxime? Ipsam!
                    </p>
                </div>
            </div>

        </>
    )
}

export default Results
