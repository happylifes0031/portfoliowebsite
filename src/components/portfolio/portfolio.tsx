import * as React from 'react';
import classNames from 'classnames';
import PortfolioColumn from './portfolio-column';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    activeNode: any;
}


export class Portfolio extends React.Component<Props>{
    state = { 
        selectedIndex: 0,
        fadeIn: false,
        hover:false,
        image: '',
        topImage: 10,
        leftImage: 20,
        offset: 0,
        modalOpend: false,
        scrollPosition: 0,
        imagePosition: 0,
        close: false
    }

    imageModal = (e, imageName) => {
        console.log('document.body.getBoundingClientRect()',  document.body.getBoundingClientRect())
        console.log('client X', e.clientX);
        console.log('target', e.target.getBoundingClientRect());
        console.log('client width', e.target.clientWidth);
        console.log('client offset height', e.target);
        let pageOffset = document.body.getBoundingClientRect();
        let offset = e.target.getBoundingClientRect().top - pageOffset.top;
        
        console.log('client offset left', offset);

        this.setState({
            hover:!this.state.hover, 
            image:imageName,
            offset: offset,
            topImage: (e.target.getBoundingClientRect().top + 200),
            leftImage: (e.target.getBoundingClientRect().left - 215),
            close: false
        })
    }

    closeModal = () => { 
        this.setState({
            hover:!this.state.hover
        })
    }

    toggleModal = (imageOffset:any) => { 
        console.log('image', imageOffset);
        this.setState({
            modalOpend:!this.state.modalOpend,
            imagePosition: imageOffset.top,
            close: false
        });
    }


    handleScroll = (event) => {
        let lastScrollY = window.scrollY;
        let offset = this.state.offset;
        let scrollCorrection = (offset - lastScrollY);
        this.setState({scrollPosition:scrollCorrection})
        let imageOffset = this.state.imagePosition;

        if((imageOffset - scrollCorrection) > 275 ){ 
            this.setState({close:true, modalOpend:false})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div id='portfolio' className='portfolio'>
                <div className='portfolio-title'><h2>Portfolio</h2></div>
                { 
                    showCase.map( (showcase, index) => { return ( 
                            <div className='portfolio-content'>
                                <div className='portfolioContent'>
                                    <div className='client'>Client: <span className="client-title">{showcase.client}</span></div>
                                    <div className='project'>Project: <span className="client-project">{showcase.projectTitle}</span></div>
                                    <div className='description'><span className="client-project">{showcase.description}</span></div>
                                </div>
                                <div className='images'>
                                    <PortfolioColumn 
                                        showCase={showcase.imgName1} 
                                        toggledImage={this.toggleModal} 
                                        modalOpenend={this.state.modalOpend} 
                                        close={this.state.close}
                                    />
                                    <PortfolioColumn 
                                        showCase={showcase.imgName2} 
                                        toggledImage={this.toggleModal} 
                                        modalOpenend={this.state.modalOpend} 
                                        close={this.state.close}
                                    />
                                    { showcase.imgName3 && 
                                        <PortfolioColumn 
                                            showCase={showcase.imgName3} 
                                            toggledImage={this.toggleModal} 
                                            modalOpenend={this.state.modalOpend} 
                                            close={this.state.close}
                                        />
                                    }
                                </div>
                        </div>
                        )
                    })
                }
            </div>   
        )
    }
}