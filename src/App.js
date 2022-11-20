// import Header from './Components/Header/Header';
// import Maincontainer from './Components/Maincontainer/Maincontainer';
// import Footer from './Components/Footer/Footer';
// import Card from './Components/Card/Card';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import NewCard from './Components/NewCard/NewCard';
import TryComponents from './Components/TryComponents/TryComponents';
import data from './Assets/data';
import person1 from './Assets/Images/project3_card_person7.jpg';
import person2 from './Assets/Images/project3_card_person6.jpg';
import person10 from './Assets/Images/project3_card_person10.jpg';
import person3 from './Assets/Images/project3_card_person1.jpg';
import person4 from './Assets/Images/project3_card_person2.jpg';
import person5 from './Assets/Images/project3_card_person3.jpg';
import person6 from './Assets/Images/project3_card_person4.jpg';
import person7 from './Assets/Images/project3_card_person5.jpg';
import person8 from './Assets/Images/project3_card_person8.jpg';
import person9 from './Assets/Images/project3_card_person9.jpg';

function App() {
  let imgs = [person1,person2,person3,person4,person5,person6,person7,person8,person9,person10];
let  img_index = -1;
let newdata = data.map((data)=>{
  img_index++;
  return <NewCard key={data.id} title={data.title} id={data.id} country={data.country} desc ={data.desc}  price={data.price} name={data.name} img={imgs[img_index]} />
})

  return (<>
  <Navbar></Navbar>
  <Hero></Hero>
  <div className='my_container'>
    {newdata}
  </div>
  
  

  </>
  );
}

export default App;
