import {useNav} from "@/components/hooks/useNav";

const ContactSection = () => {
    const ref = useNav("contact")

    return <section className="contact section" id="contact" ref={ref}>
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid section__border">
            <div className="contact__content">
                <h3 className="contact__title">
                    <i className="ri-chat-3-line"></i> Talk to me
                </h3>

                <div className="contact__info">
                    <div className="contact__data">
                        <span className="contact__data-title">Email&nbsp;</span>
                        <span className="contact__data-info">hello@kianattar.com</span>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">
                    <i className="ri-send-plane-line"></i> Tell me about your project
                </h3>

                <form action="" className="contact__form" id="contact-form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" placeholder="Your name"
                               className="contact__form-input" id="contact-name"/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="text" name="email" placeholder="Your email"
                               className="contact__form-input" id="contact-email"/>

                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="message" placeholder="Tell me about your project" className="contact__form-input"
                                  id="contact-project"></textarea>
                    </div>

                    <button type="submit" className="contact__button contact__button--disabled" style={{justifySelf: "center"}} disabled>
                        Send <i className="ri-arrow-right-up-line"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
}

export default ContactSection;
