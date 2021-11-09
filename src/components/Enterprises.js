import React from 'react'

function Enterprises() {
    return (
        <div className='enterprises'>
            <h2>For <span>Enterprises</span></h2>
            <div className='boxes'>
                <div className='box'>
                    <img src='https://hazy.com/images/product/enterprise.jpg' />
                    <div className='para'>
                        <h3>Scalable Platform</h3>
                        <p>
                            With as little as 5 lines of code, our platform scales easily, providing uninterrupted access to production-level synthetic data generators.
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <img src='https://hazy.com/images/product/time-series.jpg' />
                    <div className='para'>
                        <h3>Differential privacy guarantees</h3>
                        <p>
                            Truly scalable risk management needs robust privacy guarantees. With Videha, differential privacy is at the core of all of your interactions with sensitive data.
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <img src='https://hazy.com/images/product/privacy.jpg' />
                    <div className='para'>
                        <h3>Support for leading-edge methods</h3>
                        <p>
                            Cut down time to utilize leading-edge synthetic data generation methods via fully-tested Beta releases and ready reference guidelines. Onboarding is on us!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enterprises
