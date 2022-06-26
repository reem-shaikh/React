import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch, useSelector } from 'react-redux';
import { likePost, dislikePost } from '../slice';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper, Stack} from '@mui/material'
import {useState} from 'react'

const ExpandMore = styled((props) => {
  console.log(props.NewsPost)

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PostCard(props) {
  //console.log(props.NewsPost)
  const [expanded, setExpanded] = React.useState(false);
  const [inputData, setInputData] = useState('')

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    //dispatching actions 
    const dispatch = useDispatch();
    //retreiving state from redux store 
    // we'll check if the imageid is present inside the likedPosts state we retreieved from redux store. 
    const isLiked = useSelector(state => state.likedPosts?.some(e => e === props.NewsPost?.source?.id));
  
    //some() is a callback function and checks if atleast one element pssing that exists. Is there any one element having that image ID. then it means that post is liked. 
  
    //incase of old school redux, dont use some(), rather use 
    
    const likeDislikePost = _ => {
      if(isLiked) {
        dispatch(dislikePost(props.NewsPost?.source?.id));
      } else {
        dispatch(likePost(props.NewsPost?.source?.id));
      }
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.NewsPost.urlToImage}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.NewsPost.author}
        subheader={props.NewsPost.publishedAt}
      />
      <CardMedia
        component='img'
        height="194"
        image={props.NewsPost.urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.NewsPost.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      <IconButton aria-label="add to favorites" onClick={likeDislikePost}>
          <FavoriteIcon style={{color: isLiked? "red": "inherit"}} />
        </IconButton>
  
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> 
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        <Stack spacing={2}>
          <Item >
           <Stack direction="row" spacing={1} sx={{ width: 55, height: 55 }}>
             <Item sx={{ width: 37, height: 37 }}><Avatar sx={{ width: 27, height: 27 }}>U</Avatar>
             </Item>
           <Stack>
             <Item><input borderRadius={5} 
              type="text" className="form-control" placeholder="Comment here"
              value={inputData }
              onChange={(e) => setInputData(e.target.value)}/> 
             </Item>
          </Stack>
          <Stack>
            <Item sx={{ width: 50, height: 37 }}>
              <button>Add</button>
             
            </Item> 
            
            </Stack>
           </Stack>
          </Item>
          {/* second starts */}
          {/* <Item >
           <Stack direction="row" spacing={1} sx={{ width: 55, height: 55 }}>
             <Item sx={{ width: 37, height: 37 }}><Avatar sx={{ width: 27, height: 27 }}>U</Avatar>
             </Item>
           <Stack>
             <Item>comment!
             </Item>
          </Stack>
           </Stack>
          </Item> */}
          {/* second ends */}

        </Stack>
      
        </CardContent>
      </Collapse>
    </Card>
  );
}