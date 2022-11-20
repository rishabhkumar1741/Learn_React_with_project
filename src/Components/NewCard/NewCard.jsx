import './NewCard.css'
import person1 from '../../Assets/Images/project3_card_person1.jpg';


export default function NewCard(props)
{
    return (
    <div className='card'>
        <img src={props.img} alt="" />
        <div className='card-Status'>
            <span className='card-title'>{props.title}</span>
            
            <span>{props.country}</span>
        </div>
        <p className='card-desc'>{props.desc}</p>
        <p className='card-price-parent'><span className='card-price'>From {props.price}</span> / {props.name}</p>


    </div>)
}