import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Dental = () => {
    return (
        <div className="hero mt-8 rounded-lg h-1/2">
            <div className="hero-content flex-col lg:flex-row shadow-2xl">
                <img src={treatment} className="rounded-lg lg:w-1/2 h-1/2 shadow-2xl" alt="" />
                <div>
                    <h1 className="text-6xl font-bold px-6">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 px-6 text-2xl"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <div className="px-6 mt-2">
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dental;