import Navbar from "../Navbar";

const Error = () => {
    return (
        <>
            <Navbar/>
            <div className="h-screen bg-cyan-950 content-center">
                <h1 className="text-white font-extrabold align-middle text-6xl text-center">Error 404</h1>
                <h2 className="text-white font-bold text-center pt-3">
                    The page you are looking for does not exist
                </h2>
            </div>
        </>
    )

   
}

export default Error;