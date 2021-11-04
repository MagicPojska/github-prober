const Repos = ({ repo }) => {
    return (
        <div className="sm:px-36 lg:px-96 py-1 flex flex-wrap justify-between space-y-6 lg:space-y-3">
            <div className="border-solid border p-2 border-black dark:border-gray-600 w-full">
                <a href={`${repo.html_url}`} target="_blank" rel="noreferrer">
                    <p className="text-sm">{repo.html_url}</p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{repo.name}</p>
                </a>
                <div className='text-sm flex justify-between'>
                    <p>Stars: {repo.stargazers_count}</p>
                    <p className='border-solid border rounded-full px-2 border-black dark:border-gray-600'>{repo.language}</p>

                </div>
            </div>
        </div>
    )
}

export default Repos
