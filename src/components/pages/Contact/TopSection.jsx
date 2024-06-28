import Logo from '../../../assets/CompanyLogo.png'

const TopSection = () => {
    return (
        <div className='bg-top-section w-full h-96 bg-cover bg-center'>
        <div>
            <img src={Logo}/>
        </div>
    </div>
    );
}

export default TopSection;