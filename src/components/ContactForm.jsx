import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mv8hl0r', 'template_z7zvd2l', form.current, 'IJCK38pe-KnpKG75x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-3 bg-slate-100 shadow-lg p-10 mt-28">
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
            <button type="submit" value="Send" className="btn">Submit</button>
        </form>
    )
}

export default ContactForm
