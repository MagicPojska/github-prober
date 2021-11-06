const Login = () => {
    const GITHUB_CLIENT_ID = 'Iv1.290a2b0674206902'
    const githubRedirectURL = 'http://localhost:8080/auth/github'
    const path = '/'

    // <div className='mx-auto pt-10'>
    //     <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`} className='border rounded-md p-3'>Login</a>
    // </div>
    return (
        <div className='pt-10'>
            <div id="whoobe-3fery" className="w-full mx-auto md:w-96 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
                <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="img" title="img" className="w-full h-auto object-cover rounded-t-lg" />
                <div className="w-full p-4 justify-start flex flex-col">
                    <h4 className="border-b-2 border-gray-900 text-3xl text-gray-900">Welcome to Github Prober</h4>
                    <p className="my-4 text-gray-700">You can use this app to search users on GitHub, edit their profile or repository info and save it localy to .json file. First you need to login with your GitHub account!</p>
                    <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`} className="my-4 px-4 py-2 text-center text-white hover:bg-gray-600 bg-gray-800">Login</a>
                </div>
            </div>
        </div>

    )
}

export default Login
