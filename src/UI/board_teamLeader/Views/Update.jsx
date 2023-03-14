import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, updateProject } from "../../../actions/project";


const Update = ( ) => { 
    const params = useParams();
    const dispatch = useDispatch();
    const navigate =useNavigate();


 
    
    useEffect(() => {
        dispatch(getProjectById(params.id)); 

    }, [dispatch,params.id]);
    const project = useSelector((state) => state.project.project);
    const [project_name, setProjectName] = useState(
   
        project ? project.project_name : " ");
    const [project_description, setProjectDesc] = useState(
        project ? project.project_description : ""
    );
    const [memberId1, setMemberId1] = useState(
        project ? project.memberId1 : ""
    );
    const [memberId2, setMemberId2] = useState(
        project ? project.memberId2 : ""
    );
    const [memberId3, setMemberId3] = useState(
        project ? project.memberId3 : ""
    );
    const [leaderId, setLeaderId] = useState(
        project ? project.leaderId : ""
    );
    console.log(project.leaderId)
    const handleUpdateProject = (e) => {
        e.preventDefault();
      
        dispatch(updateProject(params.id,project_name, project_description, memberId1, memberId2, memberId3, leaderId));
        setProjectName('');
        setProjectDesc('');
        setMemberId1('');
        setMemberId2('');
        setMemberId3('');
        setLeaderId('');
        alert('Updated successfully');
        navigate(`/home/view/${params.id}`)
    };

    return (
        <form onSubmit={handleUpdateProject} className="mt-5">
            <label>Project Name: </label>
            <input
                id="p_name"
                name="p_name"
                value={project_name}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <br />
            <br />
            <label>Project Description: </label>
            <input
                id="p_desc"
                name="p_desc"
                value={project_description}
                onChange={(e) => setProjectDesc(e.target.value)}
            />
            <br />
            <br />
            <label>Member Id1: </label>
            <input
                id="memberId1"
                name="memberId1"
                value={memberId1}
                onChange={(e) => setMemberId1(e.target.value)}
            />
            <br />
            <br />
            <label>Member Id2: </label>
            <input
                id="memberId2"
                name="memberId2"
                value={memberId2}
                onChange={(e) => setMemberId2(e.target.value)}
            />
            <br />
            <br />
            <label>Member Id3: </label>
            <input
                id="memberId3"
                name="memberId3"
                value={memberId3}
                onChange={(e) => setMemberId3(e.target.value)}
            />
            <br />
            <br />
            <label>Leader ID: </label>
            <input
                id="LeaderId"
                name="LeaderId"
                value={leaderId}
                onChange={(e) => setLeaderId(e.target.value)}
            />
            <input type="submit" />
        </form>
    );
};

export default Update;
