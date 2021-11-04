const Results = () => {
    return (
        <div class="border w-96 relative flex flex-col mx-auto shadow-lg m-5">
            <div class="w-full flex m-3 ml-4 text-black dark:text-white">
                <img class="w-28 h-28 p-1 bg-white rounded-full" src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="" />
                <div class="title mt-9 ml-3 font-bold flex flex-col">
                    <div class="break-words">GitHub Profile</div>
                    <div class="font-semibold text-sm italic dark">Account</div>
                </div>
            </div>
            <div class="absolute bottom-0 font-bold right-0 text-xs text-gray-900 dark:text-gray-300 space-x-0 my-3.5 mr-3">
                <a class="border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Profile</a>
            </div>
        </div>
    )
}

export default Results
