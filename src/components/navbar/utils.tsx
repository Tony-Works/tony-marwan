import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  faEnvelope,
  faBell,
  faMaximize,
  faCircleCheck,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

export const listNav = [
  {
    icon: faClipboardList,
    title: 'Task',
  },
  {
    icon: faCircleCheck,
    title: 'Approval',
  },
];

export const iconNav = [
  {
    icon: faMaximize,
    notification: 0,
  },
  {
    icon: faEnvelope,
    notification: '',
  },
  {
    icon: faBell,
    notification: '',
  },
];

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: theme.palette.common.white,
  zIndex: 1,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1),
}));
