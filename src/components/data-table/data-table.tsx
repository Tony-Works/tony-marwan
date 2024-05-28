import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Van', 1539, 6313, 234, 432.0),
  createData('Car', 2373, 9.0, 337, 4213.3),
  createData('Bus', 262, 21316.0, 24123, 632.0),
  createData('Metro', 305, 332.7, 6723, 4213.3),
  createData('EV Car', 35326, 12316.0, 4923, 332.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ bgcolor: '#ba55d3' }}>
          <TableRow>
            <TableCell>Technical</TableCell>
            <TableCell align="right">IT Department</TableCell>
            <TableCell align="right">Utilities</TableCell>
            <TableCell align="right">HR Department</TableCell>
            <TableCell align="right">Workers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
