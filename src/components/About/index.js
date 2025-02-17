
import './index.scss'
import Logo from '../../assets/images/Dyronn-Kitchen.png'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        About us
                    </h1>
                    <p>
                        Dyronn Kitchen is a Nigerian-owned catering company specializing in West African-inspired cuisine, officially established in 2022.
                        Our vision is deeply rooted in the passion for delivering an unforgettable culinary experience that brings people together through
                        the universal language of food.
                    </p>
                    <p align="LEFT">
                        We believe that food is more than nourishment—it is a bridge between cultures, a storyteller of traditions,
                        and a celebration of heritage. At Dyronn Kitchen, we are dedicated to sharing the rich, bold flavors of West Africa,
                        connecting continents through taste and time
                    </p>
                </div>

                <div className="image-zone">
                    <img src={Logo} alt="Logo" />
                </div>

            </div>


        </>
    );
}


export default About