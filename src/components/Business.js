import React from 'react'
// import business from '../Hair.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Business = (props) => {
    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="business-container">
            <Paper className="business-paper">
                <h2>{business.Name}</h2>
                {
                    Object.keys(business).map((key, idx) => {
                        return <Chip label={`${key}: ${business[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Business;