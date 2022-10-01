import '../style/Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className='navbar-list'>
            {/* <ul> */}
                <h3><a href='/'>Home</a></h3>
                <h3><a href='/'>Skills</a></h3>
                <h3><a href='/'>Contact</a></h3>
            {/* </ul> */}
            </div>
            
        </div>
    )
}

export default Navbar;