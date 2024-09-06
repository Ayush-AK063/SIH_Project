import React from 'react';

const Contact_agent = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="bg-lime-400 rounded-lg p-8">
        <div className="bg-white rounded-lg p-6 border border-dashed border-lime-400">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-duration="1000">
              <img className="w-full rounded-lg" src="https://picsum.photos/600/400" alt="Call to action" />
            </div>
            <div className="lg:col-span-1" data-aos="fade-up" data-aos-duration="1000">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">Contact With Our Certified Trainer</h1>
                <p>Our Trainers are your first line of help when it comes to any issue that you may have. You can be sure that our certified agents are up to date with all the services that we offer.</p>
              </div>
              <a href="tel:+917376319926" className="inline-flex items-center bg-lime-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700">
                <i className="fas fa-phone-alt mr-2" /> Take Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_agent;
