"use server";

import "./reference.css";

interface Props {
  name: string;
  yearsWorkedWith: string;
  description: string;
  photo: string;
}

export default function Reference(props: Props) {
  return (
    <div className="referenceContainer">
      <img src={props.photo} alt={props.name} className="referencePhoto" />
      <h1 className="referenceHeader">{props.name}</h1>
      <p className="referenceYearsWorked">{props.yearsWorkedWith}</p>
      <p className="referenceDescription">{props.description}</p>
    </div>
  );
}
