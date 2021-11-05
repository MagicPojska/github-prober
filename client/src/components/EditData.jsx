import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useResultContext } from "../context/ResultsContextProvider"
import { Link, useNavigate } from 'react-router-dom'

const EditData = () => {
    const { results, repos, postResults } = useResultContext()
    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        //Since the repos.filter return an array of one object, I need to convert it to object with Object.assing
        setData(results.id == id ? results : Object.assign({}, ...repos.filter(repo => repo.id == id)))

    }, [])
    console.log(data)

    const handleSubmit = e => {
        e.preventDefault()
        postResults(data)
        alert("Data saved")
        navigate("/");
    }

    if (results.id == id) {
        return (
            <form onSubmit={handleSubmit} className="px-12 pb-10 mt-10 w-11/12 sm:w-2/3 mx-auto">
                <div className="w-full mb-2">
                    <label>Username</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.login} onChange={(e) => setData({ ...data, login: e.target.value })}
                            className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Name</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Blog</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.blog} onChange={(e) => setData({ ...data, blog: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Public repositories</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.public_repos} onChange={(e) => setData({ ...data, public_repos: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>ID</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.id} onChange={(e) => setData({ ...data, id: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Bio</label>
                    <div className="flex justify-center">
                        <textarea value={data.bio} onChange={(e) => setData({ ...data, bio: e.target.value })} className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>

                <button type='submit' className="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none">Save Data</button>
                <Link to='/' className="text-sm text-opacity-100 float-left mt-6 mb-8 hover:text-blue-300 underline">Go Back</Link>
            </form>
        )
    } else {
        return (
            <form onSubmit={handleSubmit} className="px-12 pb-10 mt-10 w-11/12 sm:w-2/3 mx-auto">
                <div className="w-full mb-2">
                    <label>Name of Repository</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>URL</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.html_url} onChange={(e) => setData({ ...data, htm_url: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Stargazers count</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.created_at} onChange={(e) => setData({ ...data, created_at: e.target.value })} placeholder="Created At"
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Stargazers count</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.clone_url} onChange={(e) => setData({ ...data, clone_url: e.target.value })} placeholder="Clone url"
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Language</label>
                    <div className="flex justify-center">
                        <input type='text' value={data.language ? data.language : "No available data"} onChange={(e) => setData({ ...data, language: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <label>Stargazers count</label>
                    <div className="flex justify-center">
                        <input value={data.stargazers_count} onChange={(e) => setData({ ...data, stargazers_count: e.target.value })} className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <p className="text-xs">*Aditional info will be saved to JSON file*</p>
                <button type='submit' className="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none">Save Data</button>
                <Link to='/' className="text-sm text-opacity-100 float-left mt-6 mb-8 hover:text-blue-300 underline">Go Back</Link>
            </form>
        )
    }

}

export default EditData
