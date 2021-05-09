import './auto.style.css';

function AutoComponent(props){
    return <div>
        <img src={props.img} alt={props.model}/>
        <p>{props.model}</p>
        <h3>{props.power}</h3>
    </div>;
}
export default AutoComponent;