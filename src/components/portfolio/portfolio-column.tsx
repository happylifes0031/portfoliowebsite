import * as React from 'react';
import classNames from 'classnames';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    showCase: any;
    toggledImage: any;
    modalOpenend: boolean;
    close: boolean;
    closeModal: any;
}

export default class PortfolioColumn extends React.Component<Props>{
    state = { 
        hover:false,
    }

    private imageModal = (event:React.MouseEvent<HTMLElement>):void => {
        event.preventDefault();
        let pageOffset = document.body.getBoundingClientRect();
        console.log('image modal')
        if(!this.props.modalOpenend) { 
            this.setState({
                hover:!this.state.hover
            })
            this.props.toggledImage(pageOffset);
        } 
    }

    private closeModal = ():void => { 
        this.setState({
            hover:!this.state.hover
        })
        this.props.closeModal();
    }

    private handleScroll = ():void => {
        if(this.state.hover && this.props.close) { 
            this.setState({
                hover:!this.state.hover
            })
        }
    }

    public componentDidMount():void {
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount():void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    public render():React.ReactNode {
        return (
            <div className='images'>
                <div className='thumbnail' 
                    style={ { backgroundImage: 'url(' + `../images/portfoliocases/${this.props.showCase}_thumb.png` + ')'} }
                    onClick={ (e) => { this.imageModal(e) } }
                    title='click to open' > 
                </div>
                <div className='modal-container'  onClick={ () => { this.closeModal() } }>   
                    <div className={classNames('modal', {'show-modal':this.state.hover})}  onClick={ () => { this.closeModal() } }>
                        <div className='modal-content'>
                            <div className='background'> </div>
                            <img 
                                src={`../images/portfoliocases/${this.props.showCase}.png`}  
                                onClick={ () => { this.closeModal() } }
                                alt="Click to close" 
                                title="Click to close" 
                                className='modal-image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}