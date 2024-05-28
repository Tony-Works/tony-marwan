import UserMenu from './user/user';
import { Typography, Stack, Badge, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconNav, listNav, StyledAppBar, StyledToolbar } from './utils';

const Navbar = () => {
  return (
    <StyledAppBar position="fixed" elevation={1}>
      <StyledToolbar>
        <Box>
          <Typography color="#2d374f" sx={{ fontWeight: 700 }}>
            Al Marwan Group
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={6}>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            {listNav?.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesomeIcon
                  style={{ fontSize: 14 }}
                  color="#2d374f"
                  icon={item.icon}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '117%',
                    color: '#000000',
                  }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {iconNav?.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Badge
                  color="warning"
                  badgeContent={item.notification}
                  variant="dot">
                  <FontAwesomeIcon
                    style={{ cursor: 'pointer', fontSize: 16 }}
                    color="#2d374f"
                    icon={item.icon}
                  />
                </Badge>
              </Box>
            ))}
          </Box>
          <UserMenu />
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
