import { createStyles, Grid, List, makeStyles, Theme } from '@material-ui/core'
import React, { useState } from 'react'
import { RepositoryResponse } from '../data-objects/Repository'
import PortfolioProject from './PortfolioProject'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // flexGrow: 1,
            minWidth: '40%'
        }
    })
)


function RepositoryList(repos: RepositoryResponse[]) {
    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <List className={classes.root}>
                {
                    repos.map(item => {
                        if (!item.fork) {
                            return <PortfolioProject
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                html_url={item.html_url}
                                releases_url={item.releases_url}
                            />
                        }
                        else
                            return <div></div>
                    })
                }
            </List>
        </Grid>
    )
}

export default RepositoryList