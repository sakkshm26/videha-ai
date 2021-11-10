import React from 'react'
import TypeWriter from 'typewriter-effect'

function TypingAnimation() {
    return (
        <div className='typewriter'>
            <TypeWriter
              options={{
                  strings: ['Secure Data Sharing','Supercharge your tasks','Implement riskless testing'],
                  autoStart: true,
                  loop: true,
                  delay: 75
              }}
            />
        </div>
    )
}

export default TypingAnimation
