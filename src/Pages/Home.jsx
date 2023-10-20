import React from 'react'

function Home() {
    return (
        <div className="container home rounded-4 p-4 mt-5">
            <h4 className='fw-bold'>Manage your team from here</h4>
            <div className="row mt-3 gap-4">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4">
                    <div className='action p-2'>
                        <h5 className='fw-semibold grey'>Action Panel</h5>
                        <ul className='list-group list-group-flush p-0 fw-semibold'>
                            <li className='list-group-item ps-0'><i class="fa-solid fa-circle-plus"></i> Create Task</li>
                            <li className='list-group-item ps-0'><i class="fa-solid fa-circle-minus"></i> Delete Task</li>
                            <li className='list-group-item ps-0'><i class="fa-solid fa-gear"></i> Assign Task</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h5 className='fw-semibold grey ms-0'>Your Teams</h5>
                    <div className="row gap-2">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4">
                            <div className='action p-2 pt-3 pb-3'>
                                <h5 className='fw-semibold grey'>Team Phoenix</h5>
                                <p className='fw-semibold'>TCS Home Page designing</p>
                                <p className='m-0 fw-semibold grey'>Due Date: <span class="badge rounded-pill text-danger border border-danger">30-10-2023</span></p>
                                <p className='m-0 fw-semibold grey'>Status: <span class="badge rounded-pill text-success border border-success">Completed</span></p>
                                <button className='btn btn-primary rounded-pill mx-auto d-block w-100 mt-3 mb-3 fw-semibold' style={{fontSize:'small'}}>Update Status</button>
                                <p className='m-0 fw-semibold'>Team Members: </p>
                                <div className='' style={{fontSize:'small'}}>
                                    <p className='m-0 fw-semibold grey'>Hari #2345</p>
                                    <p className='m-0 fw-semibold grey'>Sravan #2342</p>
                                    <p className='m-0 fw-semibold grey'>Gopi #1356</p>
                                    <p className='m-0 fw-semibold grey'>Siva #7586</p>
                                    <p className='m-0 fw-semibold grey'>Anandh #1245</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4">
                            <div className='action p-2 pt-3 pb-3'>
                                <h5 className='fw-semibold grey'>Team Phoenix</h5>
                                <p className='fw-semibold'>TCS Home Page designing</p>
                                <p className='m-0 fw-semibold grey'>Due Date: <span class="badge rounded-pill text-danger border border-danger">30-10-2023</span></p>
                                <p className='m-0 fw-semibold grey'>Status: <span class="badge rounded-pill text-success border border-success">Completed</span></p>
                                <button className='btn btn-primary rounded-pill mx-auto d-block w-100 mt-3 mb-3 fw-semibold' style={{fontSize:'small'}}>Update Status</button>
                                <p className='m-0 fw-semibold'>Team Members: </p>
                                <div className='' style={{fontSize:'small'}}>
                                    <p className='m-0 fw-semibold grey'>Hari #2345</p>
                                    <p className='m-0 fw-semibold grey'>Sravan #2342</p>
                                    <p className='m-0 fw-semibold grey'>Gopi #1356</p>
                                    <p className='m-0 fw-semibold grey'>Siva #7586</p>
                                    <p className='m-0 fw-semibold grey'>Anandh #1245</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4">
                            <div className='action p-2 pt-3 pb-3'>
                                <h5 className='fw-semibold grey'>Team Phoenix</h5>
                                <p className='fw-semibold'>TCS Home Page designing</p>
                                <p className='m-0 fw-semibold grey'>Due Date: <span class="badge rounded-pill text-danger border border-danger">30-10-2023</span></p>
                                <p className='m-0 fw-semibold grey'>Status: <span class="badge rounded-pill text-success border border-success">Completed</span></p>
                                <button className='btn btn-primary rounded-pill mx-auto d-block w-100 mt-3 mb-3 fw-semibold' style={{fontSize:'small'}}>Update Status</button>
                                <p className='m-0 fw-semibold'>Team Members: </p>
                                <div className='' style={{fontSize:'small'}}>
                                    <p className='m-0 fw-semibold grey'>Hari #2345</p>
                                    <p className='m-0 fw-semibold grey'>Sravan #2342</p>
                                    <p className='m-0 fw-semibold grey'>Gopi #1356</p>
                                    <p className='m-0 fw-semibold grey'>Siva #7586</p>
                                    <p className='m-0 fw-semibold grey'>Anandh #1245</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4">
                            <div className='action p-2 pt-3 pb-3'>
                                <h5 className='fw-semibold grey'>Team Phoenix</h5>
                                <p className='fw-semibold'>TCS Home Page designing</p>
                                <p className='m-0 fw-semibold grey'>Due Date: <span class="badge rounded-pill text-danger border border-danger">30-10-2023</span></p>
                                <p className='m-0 fw-semibold grey'>Status: <span class="badge rounded-pill text-success border border-success">Completed</span></p>
                                <button className='btn btn-primary rounded-pill mx-auto d-block w-100 mt-3 mb-3 fw-semibold' style={{fontSize:'small'}}>Update Status</button>
                                <p className='m-0 fw-semibold'>Team Members: </p>
                                <div className='' style={{fontSize:'small'}}>
                                    <p className='m-0 fw-semibold grey'>Hari #2345</p>
                                    <p className='m-0 fw-semibold grey'>Sravan #2342</p>
                                    <p className='m-0 fw-semibold grey'>Gopi #1356</p>
                                    <p className='m-0 fw-semibold grey'>Siva #7586</p>
                                    <p className='m-0 fw-semibold grey'>Anandh #1245</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home