import React, {Component} from "react";
import "./notFound.css";

class NotFound extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

render(){
    return(
        <div>
        <p>Error 404 not found</p>
        <img class="not found"  alt="" src="./public/img/mistake-5026_256.gif"/>
        </div>
    )

}
}

export default NotFound;