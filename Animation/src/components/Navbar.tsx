import { Logo, MenuGridLogo } from '../../public/images';

const Navbar = () =>
{
    return (
        <nav className='px-32 pt-14 flex justify-between fixed w-full z-50'>
            <div className="text-white font-customfont flex items-center">
                <img height={80} width={80} src={Logo} alt="logo" />
                <div className="indent-0 text-2xl ml-2">
                    <h1>NEPAL</h1>
                    <h1>BANK</h1>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <h1 className='text-white font-customfont'>MENU</h1>
                <img height={40} width={40} src={MenuGridLogo} alt="menu" />
            </div>
        </nav>
    );
}

export default Navbar;
