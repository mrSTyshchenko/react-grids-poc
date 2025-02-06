import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const MuiTable = ({onRowSelect, testData}) => {
  

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {testData.map((user) => (
                        <TableRow key={user.id} onClick= {()=>onRowSelect(user)}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
};

export default MuiTable;
