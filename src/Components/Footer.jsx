import React from 'react'

function Footer() {
    return (
        <div style={{backgroundColor:'#eef2f5'}}>
            <div className='container mt-5 p-4'>
                <div className='row'>
                    <div className='col'>
                        <div className="container mt-4 mb-4">
                            <h1 className='fw-bold m-0'>Task Mate</h1>
                            <div className="grey fw-semibold m-0 fs-5">Manage your team with ease</div>
                        </div>
                    </div>
                    <div className="col-auto fs-3 d-flex align-items-center text-center">
                        <div className='border border-dark rounded-circle m-2' style={{height:'3rem',width:'3rem'}}><i class="fa-brands fa-facebook-f m-1"></i></div>
                        <div className='border border-dark rounded-circle m-2' style={{height:'3rem',width:'3rem'}}><i class="fa-brands fa-x-twitter m-1"></i></div>
                        <div className='border border-dark rounded-circle m-2' style={{height:'3rem',width:'3rem'}}><i class="fa-brands fa-linkedin-in m-1"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer