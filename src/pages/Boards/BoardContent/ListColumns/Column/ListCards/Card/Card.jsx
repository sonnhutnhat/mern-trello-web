import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0,0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0,0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/545661998_1245808957559771_3450715153353163367_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbjNsQLemqnrI2d-iwLkBvlnxvGZ8CbkiWfG8ZnwJuSCJ5u0li3T39pmQVvoLYTMi17oYLLOb7yozv_O9ILmiR&_nc_ohc=G4RAYjOwLXYQ7kNvwHGo-Cz&_nc_oc=Adn0gvfLblmFkkUmw3z5zxtrS19sMa8dN3Aaa6vvfkEEQWTrnkvUgD_eMqyqSR2TCmM&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=r3UwhTC3JDKUMRUVvAHnbg&oh=00_AfbeCjRqMolVzf7LrPbo35VzAesORk_nPI6odpoltWe90w&oe=68C6B6D3"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
        <Typography>
          SonNN MERN Stack
        </Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>30</Button>
        <Button size="small" startIcon={<CommentIcon />}>20</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card