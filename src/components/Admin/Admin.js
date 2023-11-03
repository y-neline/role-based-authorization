import { Link } from "react-router-dom"
import Users from '../Users';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from './AdminParts/Header/Header';
import List from './AdminParts/List/List';
import Map from './AdminParts/Map/Map';

const Admin = () => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <Users />
                <Link to="/">Home</Link>
                
            </Grid>
            <Grid item xs={12} md={8}>
                <Map/>
            </Grid>
            </Grid>
        </>
    )
}

export default Admin
/**
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <h1>Admins Page</h1>
                <Users />
                <div className="flexGrow">
                    <Link to="/">Home</Link>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map/>
            </Grid>
            </Grid>
        </>
    )
}

export default Admin
 */

// import { Link } from "react-router-dom";
// import Users from './Users';

// import {CssBaseline, Grid} from '@material-ui/core';

// import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';

// const Admin = () => {
//     return (
//         <>  
//             <CssBaseline/>
//             <Header/>         
//             <Grid container spacing={3} style={{width: '100%'}}>
//                 <Grid item xs={12} md={4}>
//                     <Users />
//                     <Link to="/">Home</Link>
//                 </Grid>
//                 <Grid item xs={12} md={8}>
//                     <Map/>
//                 </Grid>
//             </Grid>
//         </>
//     );
// };

// export default Admin