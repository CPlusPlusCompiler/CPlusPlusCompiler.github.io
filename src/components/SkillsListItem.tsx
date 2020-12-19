import { Chip, createStyles, ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        }
    })
)

export default function SkillsListItem(title: string, skills: string[]) {
    const classes = useStyles()

    const [open, setOpen] = React.useState(true)
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div >
            <ListItem button onClick={handleClick} >
                <ListItemText primary={title}></ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            {open ? <ListItem className={classes.chips}>
                {skills.map(skill => {
                    return (
                        <Chip label={skill} color="secondary"></Chip>
                    )
                })}
            </ListItem> : <div></div>}
        </div>
    )


}