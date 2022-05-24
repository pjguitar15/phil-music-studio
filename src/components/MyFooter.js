import React from 'react'

const MyFooter = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <footer className='w-100 py-4 flex-shrink-0 bg-dark'>
        <div className='container py-4'>
          <div className='row gy-4 gx-5'>
            <div className='col-lg-4 col-md-6'>
              <h5 className='h1 text-white'>Phil Music Studio</h5>
              <p className='small text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className='small text-muted mb-0'>
                &copy; Copyrights. All rights reserved.{' '}
                <a className='text-primary' href='#'>
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className='col-lg-2 col-md-6'>
              <h5 className='text-white mb-3'>Social</h5>
              <ul className='list-unstyled text-muted'>
                <li>
                  <a href='#'>Facebook</a>
                </li>
                <li>
                  <a href='#'>Instagram</a>
                </li>
                <li>
                  <a href='#'>Youtube</a>
                </li>
                <li>
                  <a href='#'>Tiktok</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-6'>
              <h5 className='text-white mb-3'>Quick links</h5>
              <ul className='list-unstyled text-muted'>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Get started</a>
                </li>
                <li>
                  <a href='#'>FAQ</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-6'>
              <h5 className='text-white mb-3'>Newsletter</h5>
              <p className='small text-muted'>
                Enter your email below for you to receive newsletters
              </p>
              <form action='#'>
                <div classname='input-group mb-3'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-primary btn-sm mt-2'
                    id='button-addon2'
                    type='button'
                  >
                    <i className='fas fa-paper-plane'></i>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyFooter
