

export default function Hero() {
  return (
    <div className="flex flex-wrap justify-center gap-20 py-20">
    <div className="">
      <button className="flex text-sm text-semibold mb-10 gap-2 bg-red-100 py-4 px-5 rounded-full text-red-500">More Than Faster <img src="/images/cherry.png" alt="" /></button>
      <h1 className="text-6xl font-bold leading-snug mb-6">
        Claim Best R on <br/>
        Fast 
        <span className="text-red-500 lobster-two-bold italic"> Food</span> & <br />
        <span className="text-red-500 lobster-two-bold italic"> Restaurant</span>
      </h1>
      <p>Our job is to filling your tummy with delicious food <br />
        and  with fast and free delivery</p>
        <div className="flex items-center gap-6 mt-8">
          <div className="">
            <a type="button" className="  items-center  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-7 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-white"> 
              Get Started</a>
          </div>
          <div className="">
            <a className="flex items-center gap-2" href=""><img src="/images/play.png" alt="" /> Watch Video</a>
          </div>
        </div>

    </div>
    <div className="w-2/5">
      <img src="/images/hero.png" alt="" />
    </div>
    </div>
  )
}
