import { useFetch } from "../../../useFetch"
import "./usuarios.css"
import Progreso from "../../componetes/progreso/progreso"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';


function Usuarios() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/users')

  return (
    <div className='Usuarios'>
      {error && <li>Error: {error}</li>}
      {loading && <Progreso/>}
      {data?.map((user)=>(

       <div className="lista">
       <List sx={{ width: '100%', maxWidth: 360, }}>
       <ListItem>
         <ListItemAvatar>
           <Avatar alt="tema" src="https://png.pngtree.com/png-vector/20191022/ourlarge/pngtree-user-vector-icon-with-white-background-png-image_1843115.jpg">
             <ImageIcon/>
           </Avatar>
         </ListItemAvatar>
         <ListItemText primary={user.username} secondary={user.email} />
       </ListItem>
     </List>
     </div>

      ))}

    </div>
  )
}
export default Usuarios