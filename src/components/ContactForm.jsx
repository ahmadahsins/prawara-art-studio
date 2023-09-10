import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AlertContact from './AlertContact';

const ContactForm = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mv8hl0r', 'template_z7zvd2l', form.current, 'IJCK38pe-KnpKG75x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setIsSubmit(true);
    };

    useEffect(() => {
        setIsSubmit(false);
    }, []);

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col items-center gap-3 bg-slate-100 shadow-lg py-10 pr-10 pl-5 mt-28 mb-14 mx-5">
            <div className="form-control w-full">
                <label className="label">
                    <span className="font-semibold text-black">Name</span>
                </label>
                <input type="text" name="user_name" className="input input-bordered input-ghost w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="font-semibold text-black">Phone</span>
                </label>
                <input type="text" name="user_phone" className="input input-bordered input-ghost w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="font-semibold text-black">Email</span>
                </label>
                <input type="email" name="user_email" className="input input-bordered input-ghost w-full" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="font-semibold text-black">Message</span>
                </label>
                <textarea name="message" className="textarea textarea-bordered textarea-ghost"></textarea>
            </div>
            <button type="submit" value="Send" className="btn w-full">Submit</button>
            {isSubmit && <AlertContact />}
        </form>
    )
}

export default ContactForm
