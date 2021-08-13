import Products from "../components/Products";

function Home() {
    return (
        <>
            <div className="hero p-10 py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg"><em>Are you hungry ?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                        <button className="px-6 px-2 p-3 rounded-full text-white font-bold mt-4 bg-yellow-500 
                    hover:bg-yellow-600">Order Now</button>
                    </div>

                    <div className="w-1/2">
                        <img className="w-4/5 h-96" src="/images/pizza_main.jpg" alt="pizza" />
                    </div>
                </div>
            </div>

            <div className="pb-24 p-10">
                <Products/>
            </div>
        </>
    )
}

export default Home;

