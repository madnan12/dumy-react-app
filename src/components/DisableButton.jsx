import React from 'react'

const DisableButton = () => {
    const [value, setValue] = React.useState("");

  return (
    <div>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setValue(e.target.value.trim())} />
      <button disabled={value.length < 1}>Submit</button>
    </div>
  )
}

export default DisableButton
