import { createStyles, List, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import SkillsListItem from './SkillsListItem'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: '#34015270',
            maxWidth: 600,
        },
        listItems: {
            width: '100%',

        },
        nested: {
            color: 'white',
            paddingLeft: theme.spacing(4)
        },

    }),
)


function SkillsList() {
    const classes = useStyles()

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <div className={classes.listItems}>
                {
                    SkillsListItem("Programming languages",
                        [
                            "Kotlin",
                            "Java",
                            "C++",
                            "C#",
                            "TypeScript",
                        ]
                    )
                }

                {
                    SkillsListItem("Markup languages",
                        [
                            "Xml",
                            "Html",
                            "CSS",
                            "Gradle",
                            "MD",
                        ]
                    )
                }

                {
                    SkillsListItem("Architectural pattern",
                        [
                            "MVVM"
                        ]
                    )
                }

                {
                    SkillsListItem("Frameworks / API / tools",
                        [
                            "Qt QML, Widgets",
                            "Android SDK",
                            "Rest API",
                            ".Net Core",
                            "Git",
                            "Windows API",
                            "Network sockets",
                            "Linux",
                        ]
                    )
                }

                {
                    SkillsListItem("Android related",
                        [
                            "Room",
                            "Realm",
                            "LiveData",
                            "Jetpack navigation",
                            "Lifecycles",
                            "Hilt",
                            "Material design",
                        ]
                    )
                }
            </div>

        </List>
    )
}

export default SkillsList