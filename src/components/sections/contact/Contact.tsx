import {FormEvent, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNav} from "@/components/hooks/useNav";

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const ref = useNav("contact")
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error('Write all the input fields 📩')
            return;
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error('Invalid email address format 📧');
            return;
        }

        const res = await fetch('/api/send-message', {
            method: 'POST',
            body: JSON.stringify({
                name, email, message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if(res.status !== 200){
            toast.error(data.error);
            return;
        }
        toast.success(data.message);
        setName("");
        setEmail("");
        setMessage("");
    }

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
                        <span className="contact__data-info">h.a.develops@gmail.com</span>
                    </div>

                    <div className="contact__data">
                        <span className="contact__data-title">Message me on X</span>
                        <span className="contact__data-info">@hassan-attar-x</span>
                        {/*Insert your brand name or profile*/}
                        <a href="https://twitter.com/messages/compose?recipient_id=hassan-attar-x" target="_blank" className="contact__button">
                            Write me <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">
                    <i className="ri-send-plane-line"></i> Tell me about your project
                </h3>

                <form action="" className="contact__form" id="contact-form" onSubmit={onSubmit}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" placeholder="Your name"
                               className="contact__form-input" id="contact-name"
                               value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="text" name="email" placeholder="Your email"
                               className="contact__form-input" id="contact-email"
                               value={email} onChange={(e) => setEmail(e.target.value)}/>

                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="message" placeholder="Tell me about your project" className="contact__form-input"
                                  id="contact-project" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <button type="submit" className="contact__button" style={{justifySelf: "center"}}>
                        Send <i className="ri-arrow-right-up-line"></i>
                    </button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </section>
}

export default ContactSection;