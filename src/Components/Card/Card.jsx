import face from '../../Assets/Images/Face.jpg'
import './Card.css'
export default function Card() {
    return (


        <div className="card">
            <div className="card-image-container">
                <img className="card-img" src={face} alt="" />
            </div>
            <div className="card_name">
                <h1>Rishabh Kumar</h1>
                <p>Frontend Developer</p>
                <small>Rishabh.website</small>
            </div>
            <div className='card_button'>
                <button className='card_button_email'>Email</button>
                <button className='card_button_linkedin'>Linkedin</button>
            </div>
            <div className='card_about'>
                <h5>About</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita incidunt debitis sint, placeat dolorum, earum distinctio illum pariatur, quas et dicta officia.</p>
            </div>
            <div className='card_interacte'>
                <h5>Interacte</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum!</p>
            </div>
        </div>


    )
}