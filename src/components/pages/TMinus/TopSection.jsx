import Terra from '../../../assets/terra.jpeg'

const TopSection = () => {
    return (
        <div className="bg-white h-auto">
            <div className="flex flex-col-reverse md:flex-row pt-48 pl-8 pr-8 pb-48">
                <div className='flex-initial md:w-8/12 pr-8'>
                    <h2 className='font-bold text-xl md:text-3xl'>
                    T-Minus Talent was started in 2022 by Terra Nance, a seasoned Recruiting professional with over 15 years of experience in Recruiting and Human Resources strategies. 
                    She has assisted several large and small organizations achieve their hiring goal, leading to increased productivity, performance and increased revenue.  <br/> 
                    </h2>
                </div>
                <div className='flex-initial w-5/12 md:w-3/12 pb-8'>
                    <img src={Terra} width="1000" height="1000" className='rounded-full'/>
                </div>
            </div>
        </div>
    )
}

export default TopSection;