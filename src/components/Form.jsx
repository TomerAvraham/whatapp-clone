import React, { Component } from 'react'
import "../css/Form.css"

export default class Form extends Component {
    state = {
        massage: ""
    }
    render() {
        return (
            <div className="form" >
                <input className="form__input" value={this.state.massage} onChange={ e => this.setState({
                    massage: e.target.value
                })} type="text" />
                <button onClick={() => {
                    this.props.addMassage(this.state.massage)
                    this.setState({massage: ""})
                }
                }
                 className="form__button" >Send</button>
            </div>
        )
    }
}
