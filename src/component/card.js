export default function Card(props) {
    const card ={
            width: '40%',
          }
          const width ={
            width:"100%",
            display:'flex',
          }
        
    return (
        < div style={width} >
            <div style={card}>
            <img style={card}  src={props.img}/>
            <h1 >{props.title}</h1>
            <p>{props.des}</p>

            </div>
            
        </div>
        // <div>
        //     <div class="card-group">
        //         <div class="card">
        //             <img src={props.img} class="card-img-top" alt="..." />
        //             <div class="card-body">
        //                 <h5 class="card-title">{props.title}</h5>
        //                 <p class="card-text">{props.des}</p>
        //             </div>
        //             <div class="card-footer">
        //                 <small class="text-muted">Last updated 3 mins ago</small>
        //             </div>
        //         </div>
               
               
        //     </div>

        // </div>
    )
}