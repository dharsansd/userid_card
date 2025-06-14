function User() {
    
    return <div className="card">
       <div>
        <h1>
            RESUME-CARD
        </h1>
       </div>
        <span className="pro">ONLINE</span>
        <img src="image/2.pic.jpg" className="pic" alt="user picture" />
        <h2>JHON</h2>
        <h3>Bangalore</h3>
        <h3>Web Developer</h3>
        <div className="button">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skill">
        <h5>Skills</h5>
        <ul>
            <li>UI / UX</li>
             <li>HTML</li>
              <li>CSS</li>
               <li>REACT</li>
        </ul>   
    </div>
    </div>
}
export const UserCard = () => {
  return (
   
        <User />
   
  )
}
