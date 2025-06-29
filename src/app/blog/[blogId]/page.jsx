
import React from 'react'

export  function blogslug({params}){
    return {
        title : params.blogId
    };
}

export  function blogid({params : {blogId}}) {
  return (
    <div>
      blog: {blogId}
    </div>
  )
}
