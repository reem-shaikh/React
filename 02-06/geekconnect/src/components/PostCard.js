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
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { likePost, dislikePost } from '../slice';
//we imported the icon from here: https://mui.com/material-ui/material-icons/?query=Comment&selected=Comment
import CommentIcon from '@mui/icons-material/Comment';
import { Chip, Stack } from '@mui/material';

export default function PostCard(props) {
  //dispatching actions 
  const dispatch = useDispatch();
  //retreiving state from redux store 
  // we'll check if the imageid is present inside the likedPosts state we retreieved from redux store. 
  const isLiked = useSelector(state => state.likedPosts?.some(e => e === props.singlePost?.id));

  //some() is a callback function and checks if atleast one element pssing that exists. Is there any one element having that image ID. then it means that post is liked. 

  //incase of old school redux, dont use some(), rather use 
  
  const likeDislikePost = _ => {
    if(isLiked) {
      dispatch(dislikePost(props.singlePost?.id));
    } else {
      dispatch(likePost(props.singlePost?.id));
    }
  }


  //we acheived 3 Routes in this component 
  //when user clicks on the avatar image 
  //when user clicks on the title
  //when user clicks on the comment Icon 
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          //wrapped out avatar photo inside the link, the image avatr is anchor tag, when you click on the image it takes us to the profile page 
          //when were navigated to profile/id then through App.js Route takes us to the profile component 
          <Link to={`/profile/${props.singlePost?.owner?.id}`}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.singlePost?.owner?.picture} />
        </Link>
        }
        //when user clicks on title we redirect them to profile component 
        title={
          <Link to={`/profile/${props.singlePost?.owner?.id}`}>
            {props.singlePost?.owner?.firstName} {props.singlePost?.owner?.lastName}
        </Link>
        }
        subheader={props.singlePost?.publishDate}
        //  action={
        //      <IconButton aria-label="settings">
        //        <MoreVertIcon />
        //      </IconButton>
        //    }
  
        //    title="Shrimp and Chorizo Paella"
        //    subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        // insert image over here 
        image={props.singlePost?.image}
        alt="Paella dish"
        //add onDoubleClick attribute to integrate double tap like 
        onDoubleClick={likeDislikePost}
      />
      <CardContent>
        {/* imported from https://mui.com/material-ui/react-typography/main-content */}
        <Typography variant="body2" color="text.secondary">
          {props.singlePost?.text}
        </Typography>

        <Stack direction="row" spacing={1} mt={1}>
          {props.singlePost?.tags?.map((singleTag, idx) => {
            console.log(singleTag)
            return (  
              // search for query parameter path 
              <Link key={idx} to={`/search?q=${singleTag}`}>
                <Chip label={`#${singleTag}`} variant="outlined" size="small" style={{ textTransform: "capitalize" }} onClick={() => { }} />
              </Link>
              // <Chip label={`${singleTag}`} variant="outlined" key={idx} size="small" style={{textTransform: "capitalize"}} onClick={() => {}} />
            );
          })}
        </Stack>

      </CardContent>
      <CardActions disableSpacing>
      {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <Typography variant="caption" display="block" gutterBottom>
          {props.singlePost?.likes} Likes
        </Typography> */}

        {/* when user clicks on the heart button, likeDislikePost is called which is responsible for dispatching like and dislike actions based on the cureent isLiked state  */}
          <IconButton aria-label="add to favorites" onClick={likeDislikePost}>

          {/* inside FavoriteIcon we'll add style via ternary condition when IconButton is clicked were invoking a function which would check if post is liked or not. if its liked, dispatch dislike post, else dispatch like post */}
          <FavoriteIcon style={{color: isLiked? "red": "inherit"}} />
        </IconButton>
        {/* when isLiked state is true then increase the like count by 1 */}
        <Typography variant="caption" display="block" gutterBottom>
          {props.singlePost?.likes + (isLiked ? 1 : 0)} Likes
        </Typography>

        {/* adding link for comments */}
        {/* when user clicks on commentIcon redirect them to Detail component */}
        <Link to={`/post/${props.singlePost?.id}`} style={{ marginLeft: "auto" }}>
          {/* http://localhost:3000/post/60d21b4667d0d8992e610c85 */}
          <IconButton>
            <CommentIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}