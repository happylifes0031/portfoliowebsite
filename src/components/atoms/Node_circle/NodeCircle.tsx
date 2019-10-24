import styled from "@emotion/styled";
import {SerializedStyles} from "@emotion/utils";
import {css} from "@emotion/core";

interface StyledCircleProps {
    companyName: string;
    isEven: boolean;
    isLower: boolean;
}

const StyledCircle = styled.div( (props:StyledCircleProps):SerializedStyles => {
    return css`
      position: absolute;
      height: 14px;
      width: 14px;
      border-radius: 50%;
      display: block;
      border: 1px dashed #0a354d;
      top: ${ props.isEven ? -15 : props.isLower ? 31 : 51 }px;
      left: -8px;
      &:after{
        width:150px;
        position:absolute;
        font-size: 0.7em;
        left: 20px;
        top: 1px;
        content: "${props.companyName}";
      }
      &:hover{
        background-color: #5d89a1;
      }
    `
});

export default StyledCircle;