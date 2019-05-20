import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PortfolioColumn from './portfolio-column';

interface Props { 
    showcase:any;
    index:number;
}


export class PortfolioRow extends React.Component<Props> {
    state = { 
        yPosition: 0,
        modalOpend: false,
        close: false,
    }

    private closeModal = ():void => { 
        this.setState({
            hover:false,
            modalOpend:false,
            close: true
        })
    }

    public toggleModal = (imageOffset:any):void => { 
        this.setState({
            modalOpend:true,
            imagePosition: imageOffset.top,
            close: false
        });
    }

    private handleScroll = ():void => {
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
                <PortfolioColumn 
                    showCase={this.props.showcase.imgName1} 
                    toggledImage={this.toggleModal} 
                    modalOpenend={this.state.modalOpend} 
                    close={this.state.close}
                    closeModal={this.closeModal}
                />
                <PortfolioColumn 
                    showCase={this.props.showcase.imgName2} 
                    toggledImage={this.toggleModal} 
                    modalOpenend={this.state.modalOpend} 
                    close={this.state.close}
                    closeModal={this.closeModal}
                />
                { this.props.showcase.imgName3 && 
                    <PortfolioColumn 
                        showCase={this.props.showcase.imgName3} 
                        toggledImage={this.toggleModal} 
                        modalOpenend={this.state.modalOpend} 
                        close={this.state.close}
                        closeModal={this.closeModal}
                    />
                }
            </div>
        )
    }
}