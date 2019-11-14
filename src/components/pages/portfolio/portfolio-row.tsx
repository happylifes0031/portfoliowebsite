import React from "react";
import styled from "@emotion/styled";

import PortfolioColumn from "./portfolio-column";

interface Props {
  showcase: any;
  index: number;
}

const StyledPortfolioRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export class PortfolioRow extends React.Component<Props> {
  state = {
    yPosition: 0,
    modalOpend: false,
    close: false
  };

  updateRowState = (modalOpend: boolean, close: boolean): void => {
    this.setState({ modalOpend, close });
  };

  closeModal = (): void => {
    this.updateRowState(false, true);
  };

  toggleModal = (): void => {
    this.updateRowState(true, false);
  };

  public render(): React.ReactNode {
    return (
      <StyledPortfolioRow>
        <PortfolioColumn
          showCase={this.props.showcase.imgName1}

        />
        <PortfolioColumn
          showCase={this.props.showcase.imgName2}
        />
        {this.props.showcase.imgName3 && (
          <PortfolioColumn
            showCase={this.props.showcase.imgName3}
          />
        )}
      </StyledPortfolioRow>
    );
  }
}
