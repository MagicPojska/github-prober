import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useResultContext } from "../context/ResultsContextProvider"

const EditData = () => {
    const { results, repos, postResults } = useResultContext()
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setData(results.id == id ? results : repos.filter(repo => repo.id == id))
    }, [])

    const saveData = () => {
        postResults(data)
    }

    if (id == results.id) {

        return (
            <button onClick={() => saveData()} className='mx-auto'>Save Profile Data</button>
        )
    } else {

        return (
            <button onClick={() => saveData()}>Save Repository Data</button>

        )
    }
}

export default EditData
