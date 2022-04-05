import './intro.scss'
// import Me from '../../img/me.png'
import Fade from 'react-reveal/Fade'

function Intro ({ dark }) {
  return (
    <div className='intro'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 introLeft'>
            <Fade top>
              <div className='introLeftContainer'>
                <span className='introHeading'>Hello, My name is</span>
                <h1>Omar Ahmed</h1>
                <div className='introTitle'>
                  <div className='introTitleWrapper'>
                    <div className='introTitleItem'>Front End Developer</div>
                    <div className='introTitleItem'>Front End Engineer</div>
                    <div className='introTitleItem'>Web Developer</div>
                  </div>
                </div>
                <p className='introDesc' style={{ color: dark && '#fff' }}>
                  Being able to build the designs I produce means I can bring
                  your idea to life and make it usable in future.
                </p>
              </div>
            </Fade>
          </div>
          <div className='col-lg-6 introRight'>
            <div className='introBg'></div>
            {/* <img src={Me} alt='' className='introImg' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
