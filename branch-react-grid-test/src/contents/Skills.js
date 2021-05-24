import React, {Component} from 'react'

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
            'myskills' : ['HTML', 'CSS', 'JS', 'PHP', 'SQL', 'React']
        }
    }

    render(){
        return(
            <div className="content skills">
                <h2 className="suntopic">My Skills</h2>
                <ul>
                    {this.state.myskills.map((value) =>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;