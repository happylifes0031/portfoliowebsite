import * as React from 'react';
import classNames from 'classnames';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    showCase: any;
    toggledImage: any;
    modalOpenend: boolean;
    close: boolean;
}

export default class PortfolioColumn extends React.Component<Props>{
    state = { 
        selectedIndex: 0,
        fadeIn: false,
        hover:false,
        image: '',
        topImage: 10,
        leftImage: 20,
        offset: 0
    }

    imageModal = (e) => {
        e.preventDefault();
        console.log('document.body.getBoundingClientRect()',  document.body.getBoundingClientRect())
        console.log('client X', e.clientX);
        console.log('target', e.target.getBoundingClientRect());
        console.log('client width', e.target.clientWidth);
        console.log('client offset height', e.target);
        let pageOffset = document.body.getBoundingClientRect();
        let offset = e.target.getBoundingClientRect().top - pageOffset.top;
        
        console.log('this.props.modalOpenend ', this.props.modalOpenend );
        console.log('this.state.hover', this.state.hover );
        
        if(!this.props.modalOpenend) { 
            this.setState({
                hover:!this.state.hover, 
                offset: offset,
                topImage: (e.target.getBoundingClientRect().top + 200),
                leftImage: (e.target.getBoundingClientRect().left - 215)
            })
            this.props.toggledImage(pageOffset);
        } 
    }

    closeModal = () => { 
        if(this.props.modalOpenend) { 
            this.setState({
                hover:!this.state.hover
            })
            this.props.toggledImage();
        }
    }


    handleScroll = (event) => {
        let lastScrollY = window.scrollY;
        let offset = this.state.offset;
        console.log('this.state.hover', this.state.hover)
        console.log('this.props.close', this.props.close);
        //console.log(offset - lastScrollY);
        //let scrollCorrection = (offset - lastScrollY) + 200;
        //this.setState({topImage:scrollCorrection})
        if(this.state.hover && this.props.close) { 
            this.setState({
                hover:false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        // style={ {top:this.state.topImage, left:this.state.leftImage} }
        return (
            <div className='images'>
                <img src={`../images/portfoliocases/${this.props.showCase}.png`} width='300px' height='100%' onClick={ (e) => { this.imageModal(e) } }/>
                <div className='modal-container'>   
                    <div className={classNames('modal', {'showModal':this.state.hover})}  onClick={ () => { this.closeModal() } }>
                        <div className='modal-content'>
                            <img 
                                src={`../images/portfoliocases/${this.props.showCase}.png`}  
                                width='750px' 
                                height='490px' 
                                onClick={ () => { this.closeModal() } }
                                alt="Click to close" 
                                title="Click to close" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}