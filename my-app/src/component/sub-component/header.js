import React from 'react'
import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { getCategories } from "../store/categories";
import { Active } from '../store/categories'
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
function CenteredTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(props)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        props.getCategories();
      },[])
    return (
        
        <header>
              {console.log('category ------> ', props.category.categories)}
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {Object.values(props.category.categories).map(category => {
                        console.log('category : ', category)
                        return <Tab label={`${category.name}`}
                            onClick={() => props.Active(category.name)} ></Tab>
                    })}
                </Tabs>
            </Paper>
        </header>
    )
}
const mapStateToProps = state => ({
    category: state.categories,
})
const mapDispatchToProps = {Active,getCategories }
export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs);
