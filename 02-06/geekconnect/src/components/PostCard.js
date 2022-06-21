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

//we imported the icon from here: https://mui.com/material-ui/material-icons/?query=Comment&selected=Comment
import CommentIcon from '@mui/icons-material/Comment';
import { Chip, Stack } from '@mui/material';

export default function PostCard(props) {
  //  const [expanded, setExpanded] = React.useState(false);

  //  const handleExpandClick = () => {
  //    setExpanded(!expanded);
  //  };

  //we acheived 3 Routes in this component 
  //when user clicks on the avatar image 
  //when user clicks on the 
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
        // height sets the height for the image 
        // height="194"
        // insert image over here 
        image={props.singlePost?.image}
        alt="Paella dish"
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
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" gutterBottom>
          {props.singlePost?.likes} Likes
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