import { useState } from "react";

export default function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        hero: { name: "", title: "", tagline: "", profileImage: "" },
        about: { bio: "", email: "", phone: "", location: "", socials: "" },
        skills: [""],
        services: [{ title: "", description: "" }, { title: "", description: "" }, { title: "", description: "" }],
        portfolio: [{ title: "", image: "", description: "" }, { title: "", image: "", description: "" }, { title: "", image: "", description: "" }],
        testimonials: [""],
        blog: { title: "", summary: "" },
        contact: { message: "", email: "", phone: "" }
    });

    const handleChange = (section, field, value, index) => {
        setFormData(prev => {
        const updated = { ...prev };
        if (Array.isArray(prev[section])) {

            const updatedArray = [...prev[section]];

            if (typeof updatedArray[index] === "string") {
            updatedArray[index] = value;
            } else {
            updatedArray[index] = {...updatedArray[index], [field]: value };
            }

            updated[section] = updatedArray;

        } else if (typeof updated[section] === "object") {
            updated[section] = {...prev[section], [field]: value};
        }
        return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Collected Data:", formData);
        onSubmit(formData)

        // Route to preview page or generate portfolio
    };

    return (
        <form onSubmit={handleSubmit} className="portfolio-form">
        <h2 className="portfolio-form__title">
            Fill your details
        </h2>

        {/* Hero Section */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Hero Section</legend>
            <input className="portfolio-form__input" placeholder="Name" onChange={e => handleChange("hero", "name", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Title" onChange={e => handleChange("hero", "title", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Tagline" onChange={e => handleChange("hero", "tagline", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Profile Image URL" onChange={e => handleChange("hero", "profileImage", e.target.value)} />
        </fieldset>

        {/* About Me */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">About Me</legend>
            <textarea className="portfolio-form__input portfolio-form__textarea" placeholder="Bio" onChange={e => handleChange("about", "bio", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Email" onChange={e => handleChange("about", "email", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Phone" onChange={e => handleChange("about", "phone", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Location" onChange={e => handleChange("about", "location", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Socials (comma-separated)" onChange={e => handleChange("about", "socials", e.target.value)} />
        </fieldset>

        {/* Skills */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Skills</legend>
            {formData.skills.map((skill, i) => (
            <input key={i} className="portfolio-form__input" placeholder={`Skill #${i + 1}`} onChange={e => handleChange("skills", null, e.target.value, i)} />
            ))}
        </fieldset>

        {/* Services */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Services</legend>
            {formData.services.map((service, i) => (
            <div key={i} className="portfolio-form__service">
                <input className="portfolio-form__input" placeholder={`Service #${i + 1} Title`} onChange={e => handleChange("services", "title", e.target.value, i)} />
                <input className="portfolio-form__input" placeholder="Description" onChange={e => handleChange("services", "description", e.target.value, i)} />
            </div>
            ))}
        </fieldset>

        {/* Portfolio */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Portfolio Projects</legend>
            {formData.portfolio.map((proj, i) => (
            <div key={i} className="portfolio-form__project">
                <input className="portfolio-form__input" placeholder={`Project #${i + 1} Title`} onChange={e => handleChange("portfolio", "title", e.target.value, i)} />
                <input className="portfolio-form__input" placeholder="Image URL" onChange={e => handleChange("portfolio", "image", e.target.value, i)} />
                <input className="portfolio-form__input" placeholder="Description" onChange={e => handleChange("portfolio", "description", e.target.value, i)} />
            </div>
            ))}
        </fieldset>

        {/* Testimonials */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Testimonials</legend>
            {formData.testimonials.map((quote, i) => (
            <input key={i} className="portfolio-form__input" placeholder={`Client Quote #${i + 1}`} onChange={e => handleChange("testimonials", null, e.target.value, i)} />
            ))}
        </fieldset>

        {/* Blog */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Blog</legend>
            <input className="portfolio-form__input" placeholder="Blog Title" onChange={e => handleChange("blog", "title", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Summary (optional)" onChange={e => handleChange("blog", "summary", e.target.value)} />
        </fieldset>

        {/* Contact */}
        <fieldset className="portfolio-form__section">
            <legend className="portfolio-form__legend">Contact</legend>
            <textarea className="portfolio-form__input portfolio-form__textarea" placeholder="Message Text" onChange={e => handleChange("contact", "message", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Email" onChange={e => handleChange("contact", "email", e.target.value)} />
            <input className="portfolio-form__input" placeholder="Phone" onChange={e => handleChange("contact", "phone", e.target.value)} />
        </fieldset>

        <button type="submit" className="portfolio-form__button">Generate Portfolio</button>
        </form>
    );
}