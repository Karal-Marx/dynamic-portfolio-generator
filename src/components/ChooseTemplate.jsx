import Header from "../../../dynamic-portfolio-generator/src/components/Header"

export default function ChooseTemplate({onSubmit}) {


    const handleClick = (templateChoice) => {
        onSubmit(templateChoice)
    }

    return (
        
        <>
            <Header/>
            <div className="template-choose-text-container">
                <span>Choose your <a className="accent-link">template</a></span>
                <p>Select a professtional template that best represents your style and customize it to your needs</p>
            </div>
            <div className="sample-templates">
                <div className="template-card">
                    <img src="../src/assets/template1-sample.jpeg" alt="template1 sample pic"/>
                    <h3> Template 1 </h3>
                    <p>Split-screen layout with timeline skills and masonry portfolio grid</p>
                    <h5>Key Features</h5>
                    <ul>
                        <li>Split Hero Layout</li>
                        <li>Masonry Portfolio</li>
                        <li>Timeline Skills</li>
                        <li>Blog Section</li>                        
                    </ul>
                    <button onClick={()=>handleClick('template1')}>Customize This Template</button>
                </div>
                <div className="template-card">
                    <img src="../src/assets/template2-sample.jpeg" alt="template2 sample pic"/>
                    <h3> Template 2 </h3>
                    <p>Modern stacked card layout with badge-style skills and a responsive project grid.</p>
                    <h5>Key Features</h5>
                    <ul>
                        <li>Side-by-side (Flex) Hero</li>
                        <li>Card-Based About/Services</li>
                        <li>Grid Portfolio</li>
                        <li>Blog Highlight Section</li>                        
                    </ul>
                    <button onClick={()=>handleClick('template2')}>Customize This Template</button>
                </div>
            </div>
        </>
    )
}