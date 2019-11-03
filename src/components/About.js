import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {
    state = {
        checked: true,
        heading: 'Austin Small Businesses'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'Austin Small businesses',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'Austin Small Businesses',
            checked: newVal
        })
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p>
                    The Small Business Program provides business training, educational events, and coaching to empower entrepreneurs. Our mission is to foster job creation and support the growth of new and existing businesses by providing capacity building information, tools, and resources.&nbsp; 
                        <a style={{ color: 'mediumseagreen' }}
                        href="https://austintexas.gov/department/small-business-program"
                        target="_blank">austintexas.gov/department/small-business-program</a>
                        &nbsp;"Keep Austin weird" is the motto that leaps triumphantly from the mouths of native Austinites, signifying the city's pride in its small, local businesses. :)
                    </p>
                    <Divider />
                    <p>
                    Austin is more than the live music capital of the world — it's also the best place to start a business.
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

export default About