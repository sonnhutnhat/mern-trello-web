import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Trello Mern Stack"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private ABC"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon
          />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='SonNN'>
            <Avatar
              alt="SonNN"
              src='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-1/495962655_1360116531863884_1929281792736710610_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF0X8KNsk2LzwdJdG6-md0Agi8WOhVbYwOCLxY6FVtjA7FKSYpczVz_YigS59AUojAcKWOIvhLBXioW8xGwkvBT&_nc_ohc=nJh1OpHjtlwQ7kNvwGcaMj8&_nc_oc=Adn15qN2n2zkXQhOi7Fs4zW9coLZtZh8R0oWw2VKxuxnESz-KTnfpnwldMubZIDTY8k&_nc_zt=24&_nc_ht=scontent.fhan4-3.fna&_nc_gid=_ClmmYjwyDKl9nHmaJYYBQ&oh=00_AfaZCm38jy2kXruX60kIc9LXaNIyjcH4tUqRpfU8hGEJJg&oe=68C1F2D4'
            />
          </Tooltip>
          <Tooltip title='SonNN'>
            <Avatar
              alt="SonNN"
              src='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/470139473_1256012142274324_4753384985713753846_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFc3n8JDwnvuoR1tbbNqOBHqkp6c53RhmyqSnpzndGGbFF6g6m61GjxJtkCX5NeF0hwCp_pTaTtwexbIO71rAjK&_nc_ohc=7bJsaasEvnMQ7kNvwEOopR0&_nc_oc=Adk6ak_R_-ngTDRIO-ENFdT1uShmNHlqZwQ2AlGeeQJOdphSJ5dp61qx4UtU5y-MFtI&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=yPSrp49ghNAJEfYWG5EqkA&oh=00_AfYGRvKlNDMGttuX8A9y2-_burr3Qucj26jQLknUZI3Z0w&oe=68C47DA1'
            />
          </Tooltip>
          <Tooltip title='SonNN'>
            <Avatar
              alt="SonNN"
              src='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-1/495962655_1360116531863884_1929281792736710610_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF0X8KNsk2LzwdJdG6-md0Agi8WOhVbYwOCLxY6FVtjA7FKSYpczVz_YigS59AUojAcKWOIvhLBXioW8xGwkvBT&_nc_ohc=nJh1OpHjtlwQ7kNvwGcaMj8&_nc_oc=Adn15qN2n2zkXQhOi7Fs4zW9coLZtZh8R0oWw2VKxuxnESz-KTnfpnwldMubZIDTY8k&_nc_zt=24&_nc_ht=scontent.fhan4-3.fna&_nc_gid=_ClmmYjwyDKl9nHmaJYYBQ&oh=00_AfaZCm38jy2kXruX60kIc9LXaNIyjcH4tUqRpfU8hGEJJg&oe=68C1F2D4'
            />
          </Tooltip>
          <Tooltip title='SonNN'>
            <Avatar
              alt="SonNN"
              src='https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-1/495962655_1360116531863884_1929281792736710610_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF0X8KNsk2LzwdJdG6-md0Agi8WOhVbYwOCLxY6FVtjA7FKSYpczVz_YigS59AUojAcKWOIvhLBXioW8xGwkvBT&_nc_ohc=nJh1OpHjtlwQ7kNvwGcaMj8&_nc_oc=Adn15qN2n2zkXQhOi7Fs4zW9coLZtZh8R0oWw2VKxuxnESz-KTnfpnwldMubZIDTY8k&_nc_zt=24&_nc_ht=scontent.fhan4-3.fna&_nc_gid=_ClmmYjwyDKl9nHmaJYYBQ&oh=00_AfaZCm38jy2kXruX60kIc9LXaNIyjcH4tUqRpfU8hGEJJg&oe=68C1F2D4'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
