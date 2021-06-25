import './Card.css';

/**
 * Concept of composition ("children props") -> wrapper component
 * We can wrap jsx content within other custom components and 
 * use that content using props.children in wraping component 
 */
function Card(props) {
  const classes = "card " + props.className;
  
  return (
    <div className={classes}>{props.children}</div>
  );
} 

export default Card;