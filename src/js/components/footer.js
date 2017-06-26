import React from 'react';

var footerNav = [
  {
    name: 'Нормативно-правова база',
    link: '#',
    id: '0fn'
  },{
    name: 'Бланки для скачування',
    link: '#',
    id: '1fn'
  },{
    name: 'Інструкції',
    link: '#',
    id: '2fn'
  },{
    name: 'Iнформацiя для довiдок',
    link: '#',
    id: '3fn'
  },{
    name: 'Макети рекламних матерiалiв',
    link: '#',
    id: '4fn'
  },
]

class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      localeSwitch: false
    }
  }

  localeSwitchToggle(){
    this.setState({localeSwitch: !(this.state.localeSwitch)})
  }

  render(){
    return (
      <footer className="main-footer"
              role="contentinfo">
        <div className="main-footer__top-line">
          <div className="container">
            <div className="row middle-sm">
              <div className="col-md-9 hidden-mobile">
                <div className="main-footer__nav">
                  <ul className="nav navbar-nav">
                    {
                      footerNav.map(function(el){
                        return (
                          <li key={el.id}>
                            <a href={el.link}>
                              {el.name}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="locale-switch">
                  <div role="button"
                       className={this.state.localeSwitch ? 'locale-switch__btn open' : 'locale-switch__btn'}
                       onClick={this.localeSwitchToggle.bind(this)}>
                      <span>
                        <svg className="icon icon--ukraine"> 
                          <use xlinkHref="images/svg-symbols.svg#ukraine"></use> 
                        </svg>
                        Українська
                      </span>
                    <svg className="icon icon--arrow-down"> 
                      <use xlinkHref="images/svg-symbols.svg#arrow-down"></use> 
                    </svg>
                  </div>
                  <ul className={this.state.localeSwitch ? 'nav open' : 'nav'}>
                    <li>
                      <a href="#">
                         <svg className="icon icon--united-states"> 
                          <use xlinkHref="images/svg-symbols.svg#united-states"></use> 
                        </svg>
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom-line">
          <div className="container">
            <small className="copyrright">
              © 2016 При використанні матеріалів посилання на сайт обов’язкове.
            </small>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;