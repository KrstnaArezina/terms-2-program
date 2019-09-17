import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import {exercises} from "../../store";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = {
    Paper: {padding:20, margin:10, height:500, overflowY:"auto"},
};

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default ({exercises}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography variant={"h6"}
                        style={{textTransform: 'uppercase'}}>
                            {group}
                        </Typography>
                        <List component="ul" >
                            {exercises.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}

                        </List>
                    </Fragment>
                )}

            </Paper>

        </Grid>
    <Grid item sm>
        <Paper style={styles.Paper}>
            <Typography>
Welcome
            </Typography>
            <Typography
            variant={"h4"}
            style={{marginTop:20}}>
Please select an exerise from the list on the left.
            </Typography>

        </Paper>

    </Grid>
    </Grid>
