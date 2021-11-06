import axios from "axios"

const Login = () => {
    const GITHUB_CLIENT_ID = 'Iv1.290a2b0674206902'
    const githubRedirectURL = 'http://localhost:8080/auth/github'
    const path = '/'


    return (
        <div className='mx-auto pt-10'>
            <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubRedirectURL}?path=${path}&scope=user:email`} className='border rounded-md p-3'>Login</a>
        </div>
    )
}

export default Login
