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

    public render() {
        return (
            <div className='images'>
                <img src={`../images/portfoliocases/${this.props.showCase}_thumb.png`} width='300px' height='100%' onClick={ (e) => { this.imageModal(e) } }/>
                <div className='modal-container'>   
                    <div className={classNames('modal', {'show-modal':this.state.hover})}  onClick={ () => { this.closeModal() } }>
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