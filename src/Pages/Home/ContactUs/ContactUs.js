import React from 'react';
import appointment from '../../../assets/images/appointment.png'



const ContactUs = () => {
    return (
        <section className='mt-32 rounded-box'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col">
                    <h1 className='text-cneter text-info text-2xl text-bold'>Contact Us</h1>
                    <h1 className='text-cneter text-white text-3xl'>Stay connected with us</h1>
                    <div className="hero-content flex-col">
                        <input type="text" placeholder="Email Address" className=" textarea textarea-primary w-full px-20 py-3 max-w-xs" />
                        <input type="text" placeholder="Subject" className=" textarea textarea-primary w-full px-20 py-3 max-w-xs" />
                        <textarea placeholder="Your message" className="textarea textarea-primary textarea-lg w-full px-30 py-8 max-w-xs" ></textarea>
                    </div>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;