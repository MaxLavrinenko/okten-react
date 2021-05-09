export default function Car (props){
    let {producer,model,engine,power} = props;
    return <div>
        <h3> {producer} - {model}</h3>
        <p> Engine {engine} power {power}hp</p>
    </div>
}