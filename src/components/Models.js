import React from 'react'

function Models() {
    return (
        <div className='models'>
            <h2>Reimagine Information Transfer <span>With Synthetic Data</span></h2>
            <p>Videha leverages the power of generative models called GANs to learn signals and cross dependencies in the data. Once learned, these generator models can perpetually generate high-fidelity synthetic data in less than 5 lines of code.</p>
            <div className='images'>
                <img className='before' src='https://videha.ai/static/media/product.0d8b50d9.png' />
                <div className='after-images none'>
                    <img className='img-step' src='data.png' />
                    <img className='arrow' src='arrow.png' />
                    <img className='img-step' src='settings.png' />
                    <img className='arrow' src='arrow.png' />
                    <img className='img-step' src='data2.png' />
                    <img className='arrow' src='arrow.png' />
                    <img className='img-step' src='list.png' />
                </div>
            </div>
        </div>
    )
}

export default Models
