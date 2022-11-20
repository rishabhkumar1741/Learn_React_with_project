import './Hero.css';
import img from '../../Assets/Images/project3_center_photo.jpg';

 export default function Hero()
{
    return(
        <section className='hero'>
            <img src={img}  />
            <h1 className='hero-h1'>Online Experiences </h1>
            <p className='hero-p1'>Join unique interactive activities led byone-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
}