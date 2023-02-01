import { NavLink as Link } from "react-router-dom";
function Home() {
    // logger.warn("hello file")
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex space-x-2 justify-center">
                <div>
                    <Link to={process.env.REACT_APP_FRONT_URL + "/login"}>
                        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Let's Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
