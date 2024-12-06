import React from "react";

export default function Map() {
  return (
    <div className="bg-white py-20">
      <div className="relative container">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27594.186238881728!2d-9.489937203442386!3d30.172186629259055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1723733833977!5m2!1sen!2sma"
            width="1500"
            height="800"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="flex flex-col gap-10 justify-center bg-gradient-to-r from-white w-1/2 h-full bg-opacity-80 p-10">
              <h1 className="text-black text-4xl font-bold">Contactez-Nous</h1>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">E-MAIL</h1>
                  <p className="text-black text-lg">tahabrec@gmail.com</p>
                </div>
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">
                    Telephone
                  </h1>
                  <p className="text-black text-lg">+212 6280989872</p>
                </div>
                <div>
                  <h1 className="text-[#2B9DC8] font-bold text-xl">Address</h1>
                  <p className="text-black text-lg">
                    Cleverue Council Institual SARL
                  </p>
                  <p className="text-black text-lg">
                    133 rue Med Smiha, Jawhart Med Smiha
                  </p>
                  <p className="text-black text-lg">ETG 6 appt 35</p>
                  <p className="text-black text-lg">Agadir, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
