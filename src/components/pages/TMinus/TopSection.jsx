import Terra from '../../../assets/terra.jpeg'

const TopSection = () => {
    return (
        <div className="bg-white h-screen">
            <div className="flex flex-row pt-48 pl-8 pr-8">
                <div className='flex-initial w-8/12 pr-8'>
                    <h2 className='font-bold text-3xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at. 
                        Hendrerit gravida rutrum quisque non tellus orci. Vel elit scelerisque mauris pellentesque. Iaculis eu non diam phasellus vestibulum lorem sed risus 
                        ultricies. Id cursus metus aliquam eleifend mi. <br/> 
                    </h2>
                </div>
                <div className='flex-initial w-3/12'>
                    <img src={Terra} width="1000" height="1000" className='rounded-full'/>
                </div>
            </div>
        </div>
    )
}

export default TopSection;