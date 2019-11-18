import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { SerializedStyles } from "@emotion/utils";

interface PortfolioColumnProps {
  showCase: string;
}

interface StyledModalProps {
  displayModal;
}

const StyledThumbnail = styled.div`
  height: 180px;
  width: 350px;
  margin: 0.5em 0;
  border-radius: 5px;
  border-bottom: 8px solid $orange-color;
  background-size: cover;
  cursor: pointer;
`;

const StyledScrim = styled.div(
  (props: StyledModalProps): SerializedStyles => {
    return css`
      display: ${props.displayModal ? "block" : "none"};
      opacity: ${props.displayModal ? 1 : 0};
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(114, 114, 114, 0.5);
      cursor: pointer;
    `;
  }
);

const StyledModalContent = styled.div(
  (props: StyledModalProps): SerializedStyles => {
    return css`
      position: relative;
      display: ${props.displayModal ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      width: 770px;
      height: 510px;
      max-width: 1400px;
      max-height: 900px;
      background-color: white;
      border-radius: 10px;
      cursor: pointer;
      border: 10px solid #fff;
      left: -200px;
      top: 200px;
      &:before {
        content: "";
        position: absolute;
        left: 45%;
        top: -24px;
        display: block;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #fff;
        clear: both;
        transform: rotate(180deg);
      }
    `;
  }
);

const PortfolioColumn = (props: PortfolioColumnProps): JSX.Element => {
  const [displayModal, setDisplayModal] = useState(false);

  const toggleImageModal = (): void => setDisplayModal(!displayModal);

  return (
    <>
      <StyledScrim
        displayModal={displayModal}
        onClick={() => {
          setDisplayModal(false);
        }}
      />
      <StyledThumbnail
        style={{
          backgroundImage:
            "url(" +
            `../images/portfoliocases/${props.showCase}_thumb.png` +
            ")"
        }}
        onClick={() => {
          toggleImageModal();
        }}
        title="click to open"
      >
        <StyledModalContent displayModal={displayModal}>
          <img
            src={`../images/portfoliocases/${props.showCase}.png`}
            alt="Portfolio larger image"
            title="Click to close"
            className="modal-image"
            style={{ width: "770px", height: "510px" }}
          />
        </StyledModalContent>
      </StyledThumbnail>
    </>
  );
};

export default PortfolioColumn;
