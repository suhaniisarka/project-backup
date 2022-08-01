import { useSelector } from "react-redux";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-3 mb-0 rounded-0 bg-transparent text-white">
            {/* <img src={'shop.jpg'} style={{width:"200px"}} className="float-left"/> */}
            {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h5 className="float-right">Welcome ! {state.loggedin.Username}</h5> </>:
            ''}
            <h4 className="float-none"  style={{textAlign:"center",color:"white"}}>CarEazy : A Platform where you can buy or sell cars</h4>

            <div className="clearfix"></div>
        </div>
    )
}

export default Header;