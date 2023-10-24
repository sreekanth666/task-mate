import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTask, createTeam, deleteTask, getMembers, getTasks, getTeams, updateStatus } from '../Services/allAPI';

function Home() {
    // Update status
    const [updateTaskStatus, setUpdateTaskStatus] = useState()
    // Update cards
    const [updateTeamCards, setUpdateTeamCards] = useState()
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
                setUpdateTaskStatus(response)
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
    }, [])
    useEffect(() => {
        fetchTasks()
    }, [updateTaskStatus])

    // Delete tasks
    const handleDeleteTask = async(id) => {
        const response = await deleteTask(id)
        setUpdateTaskStatus(response)
        setUpdateTeamCards(response)
    }

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
        "name": "",
        "teamMembers": {
            "member1": "",
            "member2": "",
            "member3": "",
            "member4": ""
        }
    })

    const handleTeamSubmit = async(e) => {
        e.preventDefault()
        const response = await createTeam(teamData)
        if (response.status >= 200 && response.status < 300) {
            toast.success("Task assigned")
            setUpdateTeamCards(response)
        } else {
            toast.error("An error occurred")
        }
    }

    // Get teams details
    const [teamDetails, setTeamDetails] = useState([])
    const fetchTeams = async() => {
        const response = await getTeams()
        setTeamDetails(response.data);
    }
    useEffect(() => {
        fetchTeams()
    }, [])
    useEffect(() => {
        fetchTeams()
    }, [updateTeamCards])

    // Update status
    const [updateStatusTask, setUpdateStatusTask] = useState()
    const updateStatusInit = (statusId) => {
        const response = taskList.find(item => item.id === statusId)
        setUpdateStatusTask(response)
    }
    const [newStatus, setNewStatus] = useState()
    const [afterStatusRendering, setAfterStatusRendering] = useState()
    const statusPass = async() => {
        const body = {
            ...updateStatusTask,
            "status": newStatus
        }
        const response = await updateStatus(updateStatusTask.id, body)
        setNewStatus("")
        await fetchTeams();
        setAfterStatusRendering(response)
    }
    useEffect(() => {
        fetchTasks()
        fetchTeams()
    }, [afterStatusRendering])
    return (
        <>
            <ToastContainer />
            <div className="container home rounded-4 p-4 mt-5">
                <h4 className='fw-bold'>Manage your team from here</h4>
                <div className="row mt-3 gap-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 bg-white rounded-4 shadow">
                        <div className='action p-2'>
                            <h5 className='fw-semibold grey'>Action Panel</h5>
                            <ul className='list-group list-group-flush p-0 fw-semibold'>
                                <li className='list-group-item ps-0' data-bs-toggle="modal" data-bs-target="#createTask"><i class="fa-solid fa-circle-plus"></i> Create Task</li>
                                <li className='list-group-item ps-0' data-bs-toggle="modal" data-bs-target="#createTeam"><i class="fa-solid fa-gear"></i> Create Team</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-4 border mb-4">
                            <div className='action p-2'>
                                <h5 className='fw-semibold grey'>Created Tasks</h5>
                                <ol class="list-group list-group-numbered">
                                    {
                                        taskList.length > 0 ?
                                            taskList.map((task, index) => (
                                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                                        <div class="ms-2 me-auto">
                                                            {task.title}
                                                        </div>
                                                        <span class="badge bg-danger rounded-pill"><i class="fa-regular fa-trash-can" onClick={() => handleDeleteTask(task.id)}></i></span>
                                                    </li>
                                            ))
                                        
                                        :
                                        <p>No task is created</p>
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className='fw-semibold grey ms-0'>Your Teams</h5>
                        <div className="row gap-2">
                            
                                {
                                    teamDetails.length > 0 ?
                                        teamDetails.map((team, index) => (
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 bg-white rounded-4 shadow">
                                                <div className='action p-2 pt-3 pb-3'>
                                                    <h5 className='fw-semibold grey'>{team.name}</h5>
                                                    <p className='fw-semibold'>{
                                                        taskList.find(item => item.id === Number(team.taskId))?.title
                                                    }</p>
                                                    <p className='m-0 fw-semibold grey'>Due Date: <span class="badge rounded-pill text-danger border border-danger">{taskList.find(item => item.id === Number(team.taskId))?.dueDate}</span></p>
                                                    <p className='m-0 fw-semibold grey'>Status: <span class="badge rounded-pill text-success border border-success">{taskList.find(item => item.id === Number(team.taskId))?.status}</span></p>
                                                    <button type="button" className='btn btn-primary rounded-pill mx-auto d-block w-100 mt-3 mb-3 fw-semibold' data-bs-toggle="modal" data-bs-target="#updateStatus" style={{fontSize:'small'}} onClick={() => updateStatusInit(Number(team.taskId))}>Update Status</button>
                                                    <p className='m-0 fw-semibold'>Team Members: </p>
                                                    <div className='' style={{fontSize:'small'}}>
                                                        <p className='m-0 fw-semibold grey'>{team?.teamMembers.member1}</p>
                                                        <p className='m-0 fw-semibold grey'>{team?.teamMembers.member2}</p>
                                                        <p className='m-0 fw-semibold grey'>{team?.teamMembers.member3}</p>
                                                        <p className='m-0 fw-semibold grey'>{team?.teamMembers.member4}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )) :
                                        <p>No team is created</p>
                                }
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
                            <button type="submit" class="btn btn-primary" onClick={handleTaskSubmit} data-bs-dismiss="modal">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            

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
                                <label for="exampleInputEmail1" class="form-label">Team name</label>
                                <input type="text" class="form-control" name="title" required onChange={(e) => setTeamData({...teamData, name: e.target.value})}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Select Task</label>
                                <select class="form-select" aria-label="Default select exampleInputEmail1" required onChange={(e) => setTeamData({...teamData,taskId: e.target.value})}>
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
                            <button type="submit" class="btn btn-primary" onClick={handleTeamSubmit} data-bs-dismiss="modal">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

            {/* Update Status Modal */}
            <div class="modal fade" id="updateStatus" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{updateStatusTask?.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Current Status: {updateStatusTask?.status}
                        <hr />
                        <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Select Task</label>
                                <select class="form-select" aria-label="Default select exampleInputEmail1" required onChange={(e) => setNewStatus(e.target.value)}>
                                    <option value="Completed">Completed</option>
                                    <option value="Over Due">Over Due</option>
                                    <option value="Terminated">Terminated</option>
                                    <option value="Extended">Extended</option>
                                </select>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={statusPass} data-bs-dismiss="modal" >Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home



