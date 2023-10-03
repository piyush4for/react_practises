import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-xl"
                    src="https://cdn.filestackcontent.com/resize=height:36/cache=expiry:31536000/a7WLYWNSqmD2c7cld38f"
                    alt="Your Company"
                  />
                </div>
  )
}

export default Logo