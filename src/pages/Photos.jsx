import { useContext, useLayoutEffect } from 'react';
import { photos } from '../../data/photos';
import leoFoto from '../assets/img/Leo_FondoTransp.png';
import { NavColorContext } from '../context/NavColorContext';
export const Photos = ({ pathname }) => {
    const { setNavbarBackgroundColor, navbarBackgroundColorInit } = useContext(NavColorContext);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setNavbarBackgroundColor(navbarBackgroundColorInit)
    }, [pathname]);
    return (
        <section className="section-esp" >
            <div id="carouselExampleInterval" className="carousel slide rounded mb-3 shadow" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        photos.map(photo => (
                            <div className="carousel-item active" data-bs-interval="10000" key={photo.id}>
                                <img src={photo.imgUrl} className="d-block w-100" alt="photo" />
                            </div>
                        ))
                    }


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={leoFoto} alt="Leo Photo" className='img-fluid rounded-circle shadow-lg m-1' />
                    </div>
                    <div className="col-md-8 p-2">
                        <div className="card-body fs-2 align-middle">
                            <h1 className="card-title">Leo Erick Pereyra Rodriguez</h1>
                            <p className="card-text">La Paz - Bolivia</p>
                            <p className="card-text"><small className="text-muted">English level: (B2)</small></p>
                            <h2 className="card-text">See you soon!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
