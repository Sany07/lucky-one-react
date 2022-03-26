import React from 'react';


function Footer(props) {
    return (

        <footer className="mb-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How react works ?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    React is a JavaScript-based UI development library. It is maintained by Facebook.
                    React apps have a structure. Each piece of code that performs on its own component. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Difference between props and state
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <div>1. Props are immutable.</div>
                    <div>2. Props are used to communicate between components.</div>
                    <div>3. Props allow you to pass data from one component to other components as an argument.</div>
                    <div>4. State is mutable.</div>
                    <div>5. States can be used for rendering dynamic changes with the component.</div>
                    <div>6. State holds information about the components..</div>
                    
                    </div>
                </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;