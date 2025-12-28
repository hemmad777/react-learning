function Car(){
  const lists=['car1','car2','car3']
  return(
      <>
          <h2>Thiss is my cars</h2>
          <ol>
            {lists.map((car) => <li>this is my {car}</li> )}
          </ol>
      </>
  )
}



export default Car