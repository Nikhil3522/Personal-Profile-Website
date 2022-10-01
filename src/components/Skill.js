import '../style/Skills.css';

function Skill(){
    return(
        <div className="skills">
            <h1>skills</h1>
            <div className='skillList'>
                {/* <div> */}
                    <div className="box">
                        <div className='eighty-five' data-bar-width="85">
                            <h1 className='skillName'>C++</h1>
                        </div>    
                    </div>
                    <div className="box">
                        <div className='ninety' data-bar-width="85">
                            <h1 className='skillName'>HTML</h1>
                        </div>    
                    </div>
                    <div className="box">
                        <div className='ninety' data-bar-width="85">
                            <h1 className='skillName'>CSS</h1>
                        </div>    
                    </div>
                    <div className="box">
                        <div className='eighty-five' data-bar-width="85">
                            <h1 className='skillName'>JavaScript</h1>
                        </div>    
                    </div>
                {/* </div>
                <div> */}
                    <div className="box">
                        <div className='sixty-five' data-bar-width="85">
                            <h1 className='skillName'>MongoDB</h1>
                        </div>    
                    </div>
                    <div className="box">
                        <div className='sixty-five' data-bar-width="85">
                            <h1 className='skillName'>NodeJs</h1>
                        </div>    
                    </div>
                    <div className="box">
                        <div className='eighty' data-bar-width="85">
                            <h1 className='skillName'>ReactJs</h1>
                        </div>    
                    </div>
                {/* </div>. */}
            </div>
        </div>
    )
}

export default Skill;