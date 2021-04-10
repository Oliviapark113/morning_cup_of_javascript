import React from "react"

const Col = ({ className, ...props }) => (
    <div className={`col ${className}`} {...props} />
  )

export default Col