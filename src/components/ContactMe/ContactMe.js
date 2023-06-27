import GitHub from "../../assets/images/icons/github.svg"
import Twitter from "../../assets/images/icons/twitter.svg"
import LinkedIn from "../../assets/images/icons/linkedin.svg"
import "./ContactMe.css"
import { useState } from "react"
import { Validation } from "../../utils/Validation"

const ContactMe = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const newValues = { ...values, [event.target.id]: event.target.value }
        setValues(newValues)

        const remainingErrors = errors;
        delete remainingErrors[event.target.id]
        setErrors(remainingErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({})
        setErrors(Validation(values))
    }

    return (
        <>
            <div className="contactContainer">
                <div className="getInTouchContainer">
                    <div className="getInTouchTitle contactSectionTitle">
                        <h2>Get In Touch</h2>
                    </div>
                    <div className="getInTouchBody contactSectionBody">
                        <p className="body2">I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                        <div className="socialMediaIcons" id="socialMediaIcons">
                            <img src={GitHub} alt="Github Logo" className="socialMediaIcon" />
                            <img src={Twitter} alt="Twitter Logo" className="socialMediaIcon" />
                            <img src={LinkedIn} alt="LinkedIn Logo" className="socialMediaIcon" />
                        </div>
                    </div>
                </div>
                <div className="contactFormContainer">
                    <div className="contactFormTitle contactSectionTitle">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="contactFormBody contactSectionBody">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Jane Appleseed" id="name" onChange={handleChange} data-error={errors.name ? true : false} />
                            {errors.name && <p className="inputHint">{errors.name}</p>}
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder="email@example.com" id="email" onChange={handleChange} data-error={errors.email ? true : false} />
                            {errors.email && <p className="inputHint">{errors.email}</p>}
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="How can I help?" rows="5" id="message" onChange={handleChange} data-error={errors.message ? true : false} ></textarea>
                            {errors.message && <p className="inputHint">{errors.message}</p>}
                            <input type="submit" value="SEND MESSAGE" className="simpleLink" id="simpleLinkSubmit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ContactMe }