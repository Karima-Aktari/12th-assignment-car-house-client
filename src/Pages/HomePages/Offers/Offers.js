import React, { useEffect, useState } from 'react';

const Offers = () => {
    const [offers, setOffers] = useState([]);

    //Show offers
    useEffect(() => {
        fetch('https://shielded-wave-62421.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        <div className=" bg-dark p-4 text-light">
            <h1>What We Offers</h1>
            <div className="row mx-auto text-secondary rounded-3">
                {
                    offers.map(offer =>
                        <div key={offer._id} className="col-12 col-md-6 col-lg-3 p-4">
                            <div className="bg-info p-4">
                                <img className="rounded-3 w-100" src={offer.img} alt="" />
                                <h2>{offer.name}</h2>
                                <h2>{offer.service}</h2>
                                <h5>{offer.description}</h5>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Offers;
