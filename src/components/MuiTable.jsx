import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const MuiTable = ({onRowSelect}) => {

    const testData = [
        { id: 1, name: "Johs", address: "1010 Provo", email: "test@test.com" },
        { id: 1, name: "Andrii", address: "1030 Provo", email: "test1@test.com" },
        { id: 1, name: "Gregory", address: "1040 Provo", email: "test2@test.com" },
    ]

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {testData.map((user) => (
                        <TableRow key={user.id} onClick= {()=>onRowSelect(user)}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
};

export default MuiTable;
