import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../services/api";

import {
    Button,
    Grid,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material'

interface Item {
    id: number;
    title: string;
    body: string;
}

const HomePage: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const [data, setData] = useState<Item[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getItems();
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Grid className="relative" container direction="column" alignItems="center">
            {/* <div className="absolute z-10 right-2 select-none">
                <img style={{width: 70}} src={'https://ci3.googleusercontent.com/mail-sig/AIorK4xm6KNWiB4a36fx2hb5uqdv9ftu0JyrMRlAXbV5Zu4oRAp9aohiZW_vVe1fqlwLe3HkQerUlyI'} />
            </div> */}
            <Grid item xs={12}>
                <Link to={'/create'}><Button variant="contained" color="primary" className="px-16 py-4 m-5">Create</Button></Link>
            </Grid>

            <Grid item xs={12}>
                {loading ? (
                    <>
                        <CircularProgress />
                        <p>Loading...</p>
                    </>
                ) : (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Title</TableCell>
                                    <TableCell align="right">Body</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(({ id, title, body }: Item) => (
                                    <TableRow key={id}>
                                        <TableCell component="th" scope="row">
                                            {id}
                                        </TableCell>
                                        <TableCell align="right">{title}</TableCell>
                                        <TableCell align="right">{body}</TableCell>
                                        <TableCell align="right">
                                            <Link to={`/details/${id}`}>
                                            <Button color="primary">View Details</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

            </Grid>
        </Grid>
    );
};
export default HomePage;