import "./ingresos.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 109.95, 20, 2.199),
  createData('Mens Casual Premium Slim Fit T-Shirts', 22.3, 5, 111.5),
  createData('Mens Cotton Jacket', 55.99, 6, 335.94),
  createData('John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, 2, 1.390),
  createData('WD 2TB Elements Portable External Hard Drive - USB 3.0', 64, 1, 64),
  createData('White Gold Plated Princess', 9.99, 1, 9.99),
  createData('Pierced Owl Rose Gold Plated Stainless Steel Double', 10.99, 1, 10.99),
  createData('SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 109, 2, 228),
  createData('WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 114, 3, 342),
  createData('MBJ Womens Solid Short Sleeve Boat Neck V', 9.85, 1, 9.85),
];

export default function Ingresos() {
  return (
    <div className="ingre">
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Productos (ingresos)</StyledTableCell>
            <StyledTableCell align="right">precio</StyledTableCell>
            <StyledTableCell align="right">cantidad</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}