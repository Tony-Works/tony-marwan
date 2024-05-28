import React, { useState } from 'react';
import Navbar from 'components/navbar/navbar';
import {
  MenuItem,
  Container,
  FormControl,
  Grid,
  Typography,
  Toolbar,
  Stack,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { boardList, selectInput } from './utils';
import { ChartsOverviewDemo } from 'components/chart/bar-chart';
import Card from 'components/card/card';
import PieChart from 'components/chart/pie-chart';
import DataTable from 'components/data-table/data-table';
import Item from 'components/item/item';

export const data = [
  { value: 2033, label: 'A' },
  { value: 5235, label: 'B' },
  { value: 3230, label: 'C' },
  { value: 1325, label: 'D' },
];

const Dashboard = () => {
  const [select, setSelect] = useState('Monthly');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };
  return (
    <>
      <Navbar />
      <Toolbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontSize: 16,
                fontWeight: 700,
                color: '#2d374f',
                gap: 2,
              }}>
              <DashboardIcon sx={{ fontSize: 24 }} />
              Dashboard
            </Typography>

            <FormControl
              sx={{
                width: 110,
                '& fieldset': { border: 'none' },
                '& .MuiInputBase-root ': {
                  bgcolor: '#FFF',
                  height: 32,
                  border: 0.5,
                },
              }}>
              <Select
                defaultValue="Monthly"
                value={select}
                variant="outlined"
                label="Monthly"
                sx={{ fontSize: 14, pl: 0.5 }}
                IconComponent={ExpandMoreIcon}
                onChange={handleChange}>
                {selectInput?.map((item, idx) => (
                  <MenuItem key={idx} value={item.value} sx={{ fontSize: 15 }}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255, 0.9) 10%, #B0FCEF 90%)',
              }}>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}>
                {boardList?.map((item, idx) => <Item key={idx} {...item} />)}
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={9}>
            <Card>
              <Typography sx={{ mb: 2 }}>Quarterly Basis</Typography>
              <ChartsOverviewDemo />
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card
              sx={{
                background:
                  'linear-gradient(180deg, #00a8e1 -10%, #572ad8 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                svg: {
                  width: '105%',
                  mt: 2,
                },
              }}>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: 18,
                }}>
                Divisions
              </Typography>
              <PieChart data={data} title="People Working" number="12,233" />

              <Divider sx={{ mb: 1 }} />
              <Stack
                spacing={1}
                sx={{
                  span: {
                    fontWeight: 700,
                    color: '#add8e6',
                  },
                }}>
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: 14,
                  }}>
                  HR Department: <span>12,332</span>
                </Typography>

                <Typography
                  sx={{
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: 14,
                  }}>
                  Technical Department: <span>12,332</span>
                </Typography>

                <Typography
                  sx={{
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: 14,
                  }}>
                  IT Department: <span>12,332</span>
                </Typography>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <Typography sx={{ mb: 2 }}>People Working</Typography>
              <DataTable />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
