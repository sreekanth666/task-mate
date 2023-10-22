import React from 'react'

function Header() {
    return (
        <>
            <div className="container mt-4 mb-4">
                <h1 className='fw-bold m-0'>Task Mate</h1>
                <div className="grey fw-semibold m-0 fs-5">Manage your team with ease</div>
            </div>
            <div className='ms-5 me-5'>
                <hr />
            </div>
            <div className="container" style={{fontSize:'small'}}>
                <div className='row'>
                    <div className="col">
                    <div className="container fw-semibold">
                        <span className='grey'><i class="fa-regular fa-calendar"></i> Today</span><br />20 October 2023
                    </div>
                    </div>
                    <div className="col-auto">
                        <button className='btn btn-primary rounded-pill fw-semibold' style={{fontSize:'small'}} href="https://calendar.google.com/" target="_blank">Open Google Calendar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header