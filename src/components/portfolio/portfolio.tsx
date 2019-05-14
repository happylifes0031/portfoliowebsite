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

    closeModal = () => { 
        this.setState({
            hover:false,
            modalOpend:false,
            close: true
        })
    }

    toggleModal = (imageOffset:any) => { 
        this.setState({
            modalOpend:true,
            imagePosition: imageOffset.top,
            close: false
        });
    }


    handleScroll = ( ) => {
        let lastScrollY = window.scrollY;
        let offset = this.state.offset;
        let scrollCorrection = (offset - lastScrollY);
        this.setState({scrollPosition:scrollCorrection})
        let imageOffset = this.state.imagePosition;

        console.log('close', (imageOffset - scrollCorrection))
        if((imageOffset - scrollCorrection) > 275 ){ 
            this.closeModal()
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
                                        closeModal={this.closeModal}
                                    />
                                    <PortfolioColumn 
                                        showCase={showcase.imgName2} 
                                        toggledImage={this.toggleModal} 
                                        modalOpenend={this.state.modalOpend} 
                                        close={this.state.close}
                                        closeModal={this.closeModal}
                                    />
                                    { showcase.imgName3 && 
                                        <PortfolioColumn 
                                            showCase={showcase.imgName3} 
                                            toggledImage={this.toggleModal} 
                                            modalOpenend={this.state.modalOpend} 
                                            close={this.state.close}
                                            closeModal={this.closeModal}
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