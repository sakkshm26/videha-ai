import React from 'react'
import TypeWriter from 'typewriter-effect'

function TypingAnimation() {
    return (
        <div className='typewriter'>
            <TypeWriter
              /* onInit = {(typewriter) => {
                  typewriter.typeString('Secure Data Sharing').deleteAll().typeString('Supercharge your data tasks').deleteAll().typeString('Implement riskless testing').deleteAll().start();
                  autoStart: true,
                  loop: true
              }} */
              options={{
                  strings: ['Secure Data Sharing','Supercharge your data tasks','Implement riskless testing'],
                  autoStart: true,
                  loop: true,
                  delay: 75
              }}
            />
        </div>
    )
}

export default TypingAnimation
