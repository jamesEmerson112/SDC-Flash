import React from 'react';

const Upload = (props) => {

  var photoArray = []

  const upload = () => {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'dyzzx6rsu',
      uploadPreset: 'x24l2ww8'},

    (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log(result.info.url)
        photoArray.push(result.info.url)
        props.upload(photoArray)
      }})
    widget.open()
  }

  return <button onClick={upload}>Open</button>
}

export default Upload;