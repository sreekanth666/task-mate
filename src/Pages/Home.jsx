import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTask, getMembers, getTasks } from '../Services/allAPI';

function Home() {
    // Update status
    const [updateStatus, setUpdateStatus] = useState()
    // Create tasks
    const [taskData, setTaskData] = useState({
        "title": "",
        "dueDate": "",
        "status": "Assigned"
    })
    const handleTaskSubmit = async(e) => {
        e.preventDefault()
        const {title, dueDate} = taskData
        if (!title || !dueDate) {
            toast.warning("Please fill the fields")
        } else {
            const response = await createTask(taskData)
            if (response.status >= 200 && response.status <300) {
                toast.success("Task created")
                setUpdateStatus(response)
            } else {
                toast.error("An error occurred")
            }
        }
    }

    // Get tasks
    const [taskList, setTaskList] = useState([])
    const fetchTasks = async() => {
        const taskTemp = await getTasks()
        setTaskList(taskTemp.data)
    }
    useEffect(() => {
        fetchTasks()
    }, [updateStatus])

    // Get members
    const [members, setMembers] = useState([])
    const fetchMembers = async() => {
        const tempMembers = await getMembers()
        setMembers(tempMembers.data)
    }
    useEffect(() => {
        fetchMembers()
    }, [])

    // Create team
    const [teamData, setTeamData] = useState({
        "taskId": "",
        "taskDueDte": "",
        "taskStatus": "",
        "teamMembers": {
            "member1": "",
            "member2": "",
            "member3": "",
            "member4": ""
        }
    })
    console.log(`Task id: ${teamData.task}`);
    console.log(`Task member 1: ${teamData.teamMembers.member1}`);
    console.log(`Task member 2: ${teamData.teamMembers.member2}`);
    console.log(`Task member 3: ${teamData.teamMembers.member3}`);
    console.log(`Task member 4: ${teamData.teamMembers.member4}`);

    const handleTeamSubmit = async(e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <div className="container home rounded-4 p-4 mt-5">
                <h4 className='fw-bold'>Manage your team from here</h4>
                <div className="row mt-3 gap-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4 shadow">
                        <div className='action p-2'>
                            <h5 className='fw-semibold grey'>Action Panel</h5>
                            <ul className='list-group list-group-flush p-0 fw-semibold'>
                                <li className='list-group-item ps-0' data-bs-toggle="modal" data-bs-target="#createTask"><i class="fa-solid fa-circle-plus"></i> Create Task</li>
                                <li className='list-group-item ps-0'><i class="fa-solid fa-circle-minus"></i> Delete Task</li>
                                <li className='list-group-item ps-0' data-bs-toggle="modal" data-bs-target="#createTeam"><i class="fa-solid fa-gear"></i> Create Team</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className='fw-semibold grey ms-0'>Your Teams</h5>
                        <div className="row gap-2">
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-white rounded-4 shadow">
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
    
            {/* Add Task Modal */}
            <div class="modal fade" id="createTask" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-semibold" id="staticBackdropLabel">Add Task</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Title</label>
                                <input type="text" class="form-control" name="title" onChange={(e) => setTaskData({...taskData, title: e.target.value})}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Due Date</label>
                                <input type="date" class="form-control" name="due-date" onChange={(e) => setTaskData({...taskData, dueDate: e.target.value})} />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleTaskSubmit}>Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

            {/* Create Team Modal */}
            <div class="modal fade" id="createTeam" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-semibold" id="staticBackdropLabel">Create Team and Assign Task</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Select Task</label>
                                <select class="form-select" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData,task: e.target.value})}>
                                    <option selected value={""}>Select Task</option>
                                    {
                                        taskList?.map((task, index) => (
                                            <option value={task.id} >{task.title}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Select Team Members</label>
                                <select class="form-select" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData, teamMembers: {...teamData.teamMembers, member1: e.target.value}})}>
                                    <option selected value={""}>Select member 1</option>
                                    {
                                        members.map((members, index) => (
                                            <option value={members.name}>{members.name}</option>
                                        ))
                                    }
                                </select>

                                <select class="form-select mt-1" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData, teamMembers: {...teamData.teamMembers, member2: e.target.value}})}>
                                    <option selected value={""}>Select member 2</option>
                                    {
                                        members.map((members, index) => (
                                            <option value={members.name}>{members.name}</option>
                                        ))
                                    }
                                </select>

                                <select class="form-select mt-1" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData, teamMembers: {...teamData.teamMembers, member3: e.target.value}})}>
                                    <option selected value={""}>Select member 3</option>
                                    {
                                        members.map((members, index) => (
                                            <option value={members.name}>{members.name}</option>
                                        ))
                                    }
                                </select>

                                <select class="form-select mt-1" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData, teamMembers: {...teamData.teamMembers, member4: e.target.value}})}>
                                    <option selected value={""}>Select member 4</option>
                                    {
                                        members.map((members, index) => (
                                            <option value={members.name}>{members.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleTeamSubmit}>Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Home



