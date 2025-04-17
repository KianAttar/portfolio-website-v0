import { Testimonial } from "@/types";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <>
            <p className="testimonial__description">
                {`“${testimonial.text}”`}
            </p>

            <div>
                <h3 className="testimonial__name">{testimonial.from}</h3>
                <span className="testimonial__subtitle">{testimonial.role}</span>
            </div>
        </>
    );
};

export default TestimonialCard;
