
import leoFoto from '../../public/assets/img/Leo_FondoTransp.png';
import { SocialNet } from '../components/SocialNet';
import { SideMenu } from './SideMenu';

export const BarSideMenu = () => {
    return (
        <div className="offcanvas offcanvas-end text-bg-dark font-logo" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header align-items-start">
                <div className='d-flex align-items-center gap-2 p-0'>
                    <img src={leoFoto} alt="Foto Leo Pereyra" className='w-50' />
                    <div>
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Leo Erick Pereyra</h5>
                        <SocialNet />
                    </div>
                </div>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <SideMenu />
        </div >
    )
}
