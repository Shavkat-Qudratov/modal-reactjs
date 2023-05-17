import React from 'react'

import './Modal.css'

function Modal({ closeModal }) {
    return (
        <div className='modalBackground'>
            <div className='modalConntainer'>
                <div className='titleCloseBtn'>
                <button
                 onClick={() => closeModal(false)}> X </button>
                </div>
               
                <div className='title'>
                    <h1>Are you Sure You Want To Continue? </h1>
                </div>
                <div className='body'>
                    <h1>The next page is awesome! You should move forward. you will enjoy it.</h1>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)} className='btn' id='cancelBtn'>Cancel</button>
                    <button className='btn'>Continue</button>
                </div>
            </div>
        </div>
    )

}

export default Modal
