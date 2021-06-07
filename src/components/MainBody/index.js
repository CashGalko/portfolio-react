import React from "react";
import "../../styles/App.css";


function MainBody() {
    return ( 
    <div>

        <section className="block"> 
        <h1 id="relevant-experience">Relevant Experience</h1>
        <div>
            <p>
                Participated in the UCF coding bootcamp that focused on full-stack web development. Worked individually and in groups to research methods and software to improve functionality of web applications. Gained a familiarity with numerous npm modules and the techniques needed to discern which are needed for a particular project. Developed multiple web applications from scratch by employing the MVC philosophy of development. Utilized Github for both individual and collaborative projects. Focused on the fundamentals of troubleshooting.

            </p>
        </div>

    </section>

    <section className="block">
        <h1 id="projects">Projects</h1>

        <div className="workcontainer">
           <div className="projectbox" id= "largeimage">
                <div className="project1" id="recipe-blog">
                    
                </div>
                <div className='info1'>
                    <p>
                        App-A-Tizer: A meal planning & recipe storage application
                    </p>

                </div>
            </div>
            
           <div className="projectbox" id="smallimage">
                <div className="project2" id="crypto-tracker">
                   
                </div>
                <div className='info'>
                    <p>
                        Stonk Chasers: Crypto-currency Comparison & Rating
                    </p>

                </div>
            </div>

            <div className="projectbox" id="smallimage">

                <div className="project3" id="markdown">
                    
                </div>
                <div className="info">
                    <p>
                        Professional README Markdown Generator
                    </p>

                </div>
            
            </div>

            <div className="projectbox" id="smallimage">

                <div className="project4" id="passGen">
                    
                </div>
                <div className="info">
                    <p>
                        Password Generator
                    </p>

                </div>
            </div>

            <div className="projectbox" id="smallimage">

                <div className="project5" id="weather-dashboard">
                    
                </div>
                <div className="info">
                    <p>
                        Simple Weather Dashboard
                    </p>

                </div>
            </div>
            
            
        </div>
            

    </section>
   </div>
    )
}

export default MainBody