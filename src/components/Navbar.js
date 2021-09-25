import React,{} from 'react'

const Navbar = ({showuser}) => {

    

    

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse justify-content-center">
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <span><i className="fas fa-2x fa-user usericon text-center"></i></span>
        <li className="nav-item">
          <a className="nav-link active h3" aria-current="page" href="/"><strong> Task 2 - Users</strong></a>
        </li>
        
      </ul>
      <div className="d-flex">
        <button className="btn btn-warning" onClick={showuser}>Get Users</button>
      </div>
    </div>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar
