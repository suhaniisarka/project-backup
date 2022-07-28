import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function CustomerSidebar(){
    const dispatch=useDispatch()
    const history=useHistory()
    const logout=()=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear()
        history.push("/")
    }
    return (
        <div className="list-group">
            <Link to="/cprofile" className="list-group-item list-group-item-action" style={{color:'white'}}>Profile</Link>
            <Link to="/myorders" className="list-group-item list-group-item-action" style={{color:'white'}}>My Orders</Link>                   
            <Link to="#" onClick={logout} className="list-group-item list-group-item-action" style={{color:'white'}}>Logout</Link>            
        </div>
    )
}

export default CustomerSidebar;