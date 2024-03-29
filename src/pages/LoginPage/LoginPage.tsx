import { ProjectTitle } from "../../App"

const LoginPage: React.FC = () => {

    return (
        <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: "url(/img/background.jpg)"}}>
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>

                        <p className="max-w-xl mt-3 text-gray-300">
                        <div className="max-w-4xl p-4 text-white bg-transparent rounded-lg shadow">
                            <div className="mb-2">
                                <div className="h-3 text-3xl text-left text-white">“</div>
                                <p className="px-4 text-xl text-center text-white">
                                Most business models focus on personal interests, not user experience
                                </p>
                                <div className="h-3 text-3xl text-right text-white">”</div>
                                <p className="text-left">Tim Cook</p>
                            </div>
                            </div>
                        
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-center text-gray-700 dark:text-white inline-flex">
                        <img
                    className="h-20 w-auto"
                    src="/img/logo.png"
                    alt={ProjectTitle}
                    title={ProjectTitle}
                  />
                        </p>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div className="mt-8">
                        <form>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginPage