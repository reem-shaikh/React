import React from "react";
import "../App.css";

function File(props) {
  //   let fileIcon;

  //   if (ext === "jpeg") {
  //     fileIcon = "file image";
  //   } else if (ext === "mp4") {
  //     fileIcon = "headphones";
  //   } else if (ext === "png") {
  //     fileIcon = "file image outline";
  //   }

  //ZNMD.mp4 
  // 0    1

  //(2) ['ZNMD', 'mp4']
  //0: "ZNMD"
  //1: "mp4"
  //length: 2[[Prototype]]: Array(0)

  const ext = props.name.split(".")[1];
  console.log(props.name.split("."));

  //this is to change the icons as the extension of the children changes 
  //we create an object = key:value pairs instead of if else 
  const iconsList = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };

  //based on the extension it gets 
  const fileIcon = iconsList[ext];

  return (
    <div className="file">
      {/* it displays the icon image before the icon name */}
      <i className={`${fileIcon} icon`}></i>
      {props.name}
    </div>
  );
}

export default File;