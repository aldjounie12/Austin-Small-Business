import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class Listing extends Component {
    state = {
        checked: true,
        heading: 'Austin Small Business'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'Austin Small Business',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'Austin Small Business',
            checked: newVal
        })
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p>
                    Austin is more than the live music capital of the world — it's also the best place to start a business.&nbsp; 
                        <a style={{ color: 'mediumblue' }}
                        href="https://www.cars.com"
                        target="_blank">the best place to start a business</a>
                        &nbsp;"Keep Austin weird" is the motto that leaps triumphantly from the mouths of native Austinites, signifying the city's pride in its small, local businesses. :)
                    </p>
                    <Divider />
                    <p>
                    We've found the coolest small businesses in Austin. Some of them may be "weird," but only in the best way possible.
                    </p>
                    <Switch
                        checked={this.state.checked}
                        color="primary"
                        onChange={this.toggleSwitch}
                    />
                </Container>
            </div>
        )
    }
}
export default Listing