import React, { useState } from "react";
import classNames from "classnames";

import ResumeTable from "../node_details/ResumeTable";

interface TimeLineNodeProps {
  skills: string;
  onMouseOver: any;
  company: string;
  from: string;
  till: string;
  role: string;
  left: number;
  width: number;
  isEven: boolean;
  companyName: string;
  toggleUnder: boolean;
  toggleAbove: boolean;
}

const TimeLineNode = (props: TimeLineNodeProps): React.ReactElement => {
  const [isHoveringOver, setIsHoveringOver] = useState(false);

  const hoverOverNode = ():void => {
    const stringOfSkills = props.skills.toLowerCase().split(" ");
    const listOfSkillNames = stringOfSkills.map((skillName: string) => {
      return skillName.replace(/[, ]+/g, " ").trim();
    });

    props.onMouseOver(listOfSkillNames);
    setIsHoveringOver(true);
  };

  const onMouseLeave = ():void => {
    setIsHoveringOver(false);
  }

  const nodeStyle = {
    left: props.left + "%",
    width: props.width + "%"
  };

  return (
    <div
      className={classNames(
        "node",
        { isEven: props.isEven },
        {
          isHigher:
            (!props.isEven && props.toggleAbove) ||
            (props.isEven && props.toggleUnder)
        }
      )}
      style={nodeStyle}
    >
      <h5>{props.company}</h5>
      <div className="stick-node">
        <>
          <div
            className="circle"
            onMouseOver={() => {
              hoverOverNode();
            }}
            onMouseLeave={ () => {
              onMouseLeave();
              props.onMouseOver([]);
            }}
          >
            {isHoveringOver && <ResumeTable {...props} />}
          </div>
        </>
      </div>
    </div>
  );
};

export default TimeLineNode;
