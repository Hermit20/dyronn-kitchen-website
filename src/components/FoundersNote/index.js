import './index.scss'
import Founder from '../../assets/images/Founder.jpg'

const FoundersNote = () => {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        Founder's Note
                    </h1>
                    <p>
                        Oge’s journey began in social work and education, where she dedicated herself to student development and learning. 
                        Yet, her deep-rooted passion for cooking continued to call her. She first introduced her culinary talents at local farmers' markets, 
                        where her signature meat pies quickly became a sell-out favorite.
                        As she refined and reimagined the cherished recipes passed down through generations, 
                        her vision for something greater took shape.
                    </p>
                    <p>
                        In 2022, Oge took a bold step forward, officially launching Dyronn Kitchen—starting from her home kitchen before expanding into a commercial space. 
                        Today, Dyronn Kitchen has scaled its operations while remaining committed to a community-oriented approach, blending tradition, innovation, 
                        and the warmth of West African hospitality into every dish.
                    </p>
                </div>

                <div className="founderimage-zone">
                    <img src={Founder} alt="Logo" />
                </div>
                
            </div>

            
        </>
    );
}


export default FoundersNote


