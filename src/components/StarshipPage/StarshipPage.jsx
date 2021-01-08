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
            <div>
            <h1>Starwars Starships</h1>
            
            {this.state.results.length> 0 ? (
            <div>
                {this.state.results.map((starships)=>(
                    <div key={starships.index}>
                        <Link
                        to={{
                            pathname:'/starship',
                            state:{starships},
                        }}>
                            {starships.name}
                        </Link>

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