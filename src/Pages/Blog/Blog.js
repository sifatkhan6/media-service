import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col'>
                    <h3>Que1: Difference between authorization and authentication</h3>
                    <p>Ans: Authentication verifies who the user is but Authorization determines what resources a user can access. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user on the other hand Authorization works through settings that are implemented and maintained by the organization. Authentication is the first step of a good identity and access management process but Authorization always takes place after authentication.</p>
                </div>
                <div className='col'>
                    <h3>Que2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Ans: Firebase build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <p>Have Parse, Back4app, Kinvey , Backendless ect for authentication.</p>
                </div>
                <div className='col'>
                    <h3>Que3:  What other services does firebase provide other than authentication?</h3>
                    <p>Ans: Firebase provider Realtime database, Remote config, Machine Learning feature, Cloud function, Hosting, Cloud messaging, Cloud storage.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;