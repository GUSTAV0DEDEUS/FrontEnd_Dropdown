import React from 'react'
import './styles.sass'
import databiz from '../../assets/client-databiz.svg'
import audiophile from '../../assets/client-audiophile.svg'
import meet from '../../assets/client-meet.svg'
import maker from '../../assets/client-maker.svg'
export default function Container() {

  return (
    <main>
      <div className="col">
        <div className="content">
          <h1><span>Make</span> remote work</h1>
          <p>
            Get your in sync, no matter your location.
            Streamline processes, create team rituals, and
            watch productivity soar.
          </p>
          <button className='btn-primary'>Learn more</button>
        </div>
        <div className="brands">
          <img src={databiz} alt="" />
          <img src={audiophile} alt="" />
          <img src={meet} alt="" />
          <img src={maker} alt="" />
        </div>
      </div>
      <div className="imgContainer">
        <div className="image"></div>
      </div>
    </main>
)
}
