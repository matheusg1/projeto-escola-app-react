import React from 'react'
import img1Carousel1 from '../../assets/carousel/img1.jpg'
import img1Carousel2 from '../../assets/carousel/img2.jpg'
import img1Carousel3 from '../../assets/carousel/img3.jpg'

export default function Inicio() {
    return (
        <>
            <div className='d-flex flex-column flex-xxl-row align-items-start align-items-sm-center align-items-md-start justify-content-xxl-center mt-0 mt-xxl-5'>

                <div className='col-12 col-lg-12 col-xl-10 col-xxl-7 align-align-self-lg-start'>
                    <div id="carouselExampleCaptions" className="carousel slide me-xxl-2">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1Carousel1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Mussum Ipsum, cacilds vidis litro abertis.</h5>
                                    <p>Diuretics paradis num copo é motivis de denguis.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1Carousel2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Mauris nec dolor in eros commodo tempor.</h5>
                                    <p>Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1Carousel3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>A ordem dos tratores não altera o pão duris.</h5>
                                    <p>Casamentiss faiz malandris se pirulitá.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-12 col-lg-12 col-xl-10 col-xxl-4'>
                    <div className='display-5 fw-bold'>Mussum Ipsum, cacilds vidis</div>
                    <p className='fs-5'>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
                    <p className='fs-5'>Si num tem leite então bota uma pinga aí cumpadi!
                        Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                    <p className='fs-5'>
                        A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</p>
                    <p className='fs-5'>
                        Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi!
                        Diuretics paradis num copo é motivis de denguis. A ordem dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis.
                    </p>
                </div>
            </div>
        </>
    )
}