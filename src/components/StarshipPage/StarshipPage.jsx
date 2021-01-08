import React, {Component} from 'react'
import{getAllStarships} from '../../services/sw-api'
import{Link} from 'react-router-dom'


class Starship extends Component {
    state = { 
        results:[]
     };

     async componentDidMount(){
        const starshipData =await getAllStarships()
        this.setState({results:starshipData.results})
        
    }
    render() { 
        return ( 
            <div >
            
        
            {this.state.results.length> 0 ? (
            <div class='App-link'>
                {this.state.results.map((starships)=>(
                    <div id='starship' key={starships.index} class="card text-center m-3">
                    <div class="card-body text-center m-3" >
                        <Link  class='cards'
                        to={{
                            pathname:'/starship',
                            state:{starships},
                        }}>
                            
                            {starships.name}
                        </Link>

                        </div>
                    
                       </div> 
                ))}
                
            </div>
             ) :(
            
            <>
                        <p>Loading starship details</p>
            </>
                
              ) }   
            

            </div>
         );
    }
}
 
export default Starship ;