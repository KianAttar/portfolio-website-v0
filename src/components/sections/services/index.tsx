import {useNav} from "@/components/hooks/useNav";

const ServicesSection = () => {
    const ref = useNav("services")
    return <section className="services section" id="services" ref={ref}>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid section__border">
            <div className="services__card">
                <i className="ri-node-tree"></i>

                <h2 className="services__title">
                    <span className="one-line-span">API &</span>
                    <span className="one-line-span">Web Services</span>
                </h2>

                <p className="services__description">
                    High-quality APIs and web services developed
                    in JavaScript and Python, enabling your business
                    to deliver exceptional solutions to your clients.
                </p>
                <div className="services__border"></div>
            </div>

            <div className="services__card">
                <i className="ri-brain-2-line"></i>

                <h2 className="services__title">
                    <span className="one-line-span">AI Chatbots &</span>
                    <span className="one-line-span">Integrations</span>
                </h2>

                <p className="services__description">
                    Advanced chatbots powered by OpenAI and LangChain,
                    designed to integrate effortlessly with your systems
                    and enhance your operations
                </p>
                <div className="services__border"></div>
            </div>

            <div className="services__card">
                <i className="ri-apps-2-add-line"></i>

                <h2 className="services__title">
                    <span className="one-line-span">Apps &</span>
                    <span className="one-line-span">Websites</span>
                </h2>

                <p className="services__description">
                    Building powerful apps and services with React
                    to connect your systems with your clients,
                    delivering harmonious user experiences.
                </p>
                <div className="services__border"></div>
            </div>
        </div>
    </section>
}

export default ServicesSection;