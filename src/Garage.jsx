function Car(props){
    return(
        <>
            <h2>Thiss is a {props.brand} car</h2>
        </>
    )
}

function Garage(){
    return(
        <>
        <h2>My garages are </h2>
        <Car brand="audi" />
        <Car brand="bens" />
        </>
    )
}

export {Car,Garage}