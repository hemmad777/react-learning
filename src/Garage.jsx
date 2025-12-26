function Car(){
    return(
        <>
            <h2>Thiss is a mustang car</h2>
        </>
    )
}

function Garage(){
    return(
        <>
        <h2>My garages are </h2>
        <Car />
        <Car />
        </>
    )
}

export {Car,Garage}