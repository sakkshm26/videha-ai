import React from 'react'
import arrow from '../assets/arrow.png'
import settings from '../assets/settings.png'
import data from '../assets/data.png'
import data2 from '../assets/data2.png'
import list from '../assets/list.png'

function Models() {
    return (
        <div className='models'>
            <h2>Reimagine Information Transfer <span>With Synthetic Data</span></h2>
            <p>Videha leverages the power of generative models called GANs to learn signals and cross dependencies in the data. Once learned, these generator models can perpetually generate high-fidelity synthetic data in less than 5 lines of code.</p>
            <div className='images'>
                <img className='before' src='https://videha.ai/static/media/product.0d8b50d9.png' />
                <div className='after-images none'>
                    <img className='img-step' src={data} />
                    <img className='arrow' src={arrow} />
                    <img className='img-step' src={settings} />
                    <img className='arrow' src={arrow} />
                    <img className='img-step' src={data2} />
                    <img className='arrow' src={arrow} />
                    <img className='img-step' src={list} />
                </div>
            </div>
        </div>
    )
}

export default Models
