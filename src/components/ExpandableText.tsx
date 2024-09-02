import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const text = isExpanded ? children : children.substring(0, maxChars);
  
  if (children.length <= 100) return <p>{children}</p>;

  return (
    <>
      <p>{text}...</p>
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
