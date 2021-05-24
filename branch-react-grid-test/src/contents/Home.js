import React, {Component} from 'react'
import Profilepic from '../img/Boss.jpg'
import Widecard from '../components/Widecard'

class Home extends Component {
    render(){
        return(
            <div className="content">
                <h2>About Me</h2>
                <img src={Profilepic} alt="Profile" className="Profilepic"/>
                <Widecard name="My Name is Ravisut Srichan" nickname="My Nickname Boss" old="I’m 22 years old." to="My birthday is the 11th of November 1998." />
            </div>
        );
    }
}
export default Home;