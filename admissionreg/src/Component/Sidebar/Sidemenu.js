import {Component} from 'react'
import {SidebarData} from './SidebarData'
import './Sidemenu.css'
class Sidemenu extends Component{
  openNav(){    
    document.getElementById("mySidenav").style.width = "230px";
    document.body.style.Color = "white";
    document.getElementById("navgi").style.display="none";
  }
  closeNav(e){
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    document.getElementById("navgi").style.display="block";
    e.preventDefault();
  }
    render(){
        return(
          <div>
          <div id="mySidenav" class="sidenav">
         <div> <a class="closebtn" onClick={this.closeNav}>&times;</a></div>
          <ul>
              {SidebarData.map((val, key) => {
                return (
                  <li key={key}>
                    <a href={val.link} className={window.location.pathname === val.link ? "active" : ""}>
                    <div className="icon"><i className={val.icon}></i></div> 
                    <div className="title">{val.title}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
        </div>
        <span className="open" onClick={this.openNav}>&#9776;</span>
        <div className="navigation" id="navgi">
            <ul>
              {SidebarData.map((val, key) => {
                return (
                  <li key={key}>
                    <a href={val.link} className={window.location.pathname === val.link ? "active" : ""}>
                    <div className="icon"><i className={val.icon}></i></div> 
                    </a>
                  </li>
                );
              })}
            </ul>
            
          </div>
        </div>
        )
    }
}

export default Sidemenu