import React from 'react'
import { Container } from 'react-bootstrap'

const GetInTouch = () => {
    return (
        <div className='get-in-touch bg-light py-2'>
            <Container>
                <div className='contact-container row text-center m-0 py-5'>
                    <div
                        data-aos='fade-right'
                        data-aos-duration='500'
                        className='email col-lg-4'
                    >
                        <i className='bi bi-envelope-fill contact-icons'></i>
                        <h3 className='bebas contacts-label'>EMAIL</h3>
                        <span className='poppins-500 text-muted'>philsonj15@gmail.com</span>
                    </div>
                    <div
                        data-aos='fade-down'
                        data-aos-duration='500'
                        className='find col-lg-4'
                    >
                        <i className='bi bi-geo-alt-fill contact-icons'></i>
                        <h3 className='bebas contacts-label'>FIND</h3>
                        <span className='poppins-500 text-muted'>Block 26 Lot 28, Beverly St. Sampaguita Village, Trece Martires City, Cavite</span>
                    </div>
                    <div
                        data-aos='fade-left'
                        data-aos-duration='500'
                        className='call col-lg-4'
                    >
                        <i className='bi bi-telephone-fill contact-icons'></i>
                        <h3 className='bebas contacts-label'>CALL</h3>
                        <div className='d-flex justify-content-center flex-column poppins-500 text-muted'>
                            <span className=''>09352825409</span>
                            <span className=''>Globe</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GetInTouch