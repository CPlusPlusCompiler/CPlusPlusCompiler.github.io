import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, ListItem, Typography } from '@material-ui/core';
import { Assets, ReleaseResponse, Repository } from '../data-objects/Repository';
import Axios from 'axios';
import DownloadButton from './DownloadButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#340152',
            color: 'white',
            maxWidth: '960px',
            width: '100%',
        },
        main: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        details: {
            flexGrow: 1,
            display: 'flex',
            // minWidth: '40vw',
            width: '100%',
            maxWidth: '300px',
            flexWrap: 'wrap'
        },
        appPicture: {
            alignSelf: 'center',
            justifySelf: 'center',
            width: 400,
            maxWidth: '70%',
            flexShrink: 'revert',
            // height: 151,
            minWidth: '10%',
            margin: 16,
        },
    }),
);


// todo improve to include
function findDownloadLink(releases: ReleaseResponse[]): Assets | null {
    if (releases.length > 0) {
        let assets = releases[0].assets
        if (assets.length > 0) {
            console.log(assets)
            return assets[0]
        }
    }
    return null
}


export default function PortfolioProject(props: Repository) {
    // fetching and extracting a download link to compiled binary, if it exists
    const [downloadLink, setDownloadLink] = useState<Assets | null>(null)

    const getDownloads = async (releasesLink: string) => {
        Axios.get(releasesLink)
            .then(response => setDownloadLink(findDownloadLink(response.data)))
            .catch(error => console.error(error))
    }

    // fetching a list of images from a specific folder
    const [imagesList, setImagesList] = useState<[]>([])

    const getImages = async () => {
        let imagesUrl = "https://api.github.com/repos/CPlusPlusCompiler/"
            + props.name + "/contents/images"

        Axios.get(imagesUrl)
            .then(response => setImagesList(response.data))
            .catch(error => setImagesList([]))
    }

    useEffect(() => {
        // 1. getting download link
        // trimming {/id} off
        let url = props.releases_url.slice(0, props.releases_url.length - 5)
        console.log(url)
        getDownloads(url)

        //2. getting images
        getImages()
    }, [])

    const classes = useStyles()

    return (
        <ListItem>
            <Card className={classes.root} elevation={20}>
                <div className={classes.main}>
                    <div className={classes.details}>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {props.name}
                            </Typography>

                            <Typography>
                                {props.description}
                            </Typography>
                        </CardContent>
                    </div>

                    <CardMedia
                        component="img"
                        className={classes.appPicture}
                        image={"https://cdn.arstechnica.net/wp-content/uploads/2019/06/android-q-800x449.png"}
                        title={props.name} />
                </div>

                <CardActions>
                    <Button
                        variant="text"
                        color="secondary"
                        href={props.html_url}
                        target="_blank"
                        onClick={event => console.log(props.html_url)}>
                        Source code
                    </Button>

                    {DownloadButton(downloadLink)}
                </CardActions>
            </Card>
        </ListItem>

    );
}