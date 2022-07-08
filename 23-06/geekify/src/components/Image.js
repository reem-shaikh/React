import { useState } from 'react'

const Image = ({ src, className }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {/* while the image is loading we've set it to pulse, when its loaded, we've set loading to hidden and we display the image instead*/}
      {loading ? (
        <div className={`${className} animate-pulse bg-slate-700`}></div>
      ): false}
      <img src={src} onLoad={_ => setLoading(false)} className={`${className} ${loading ? "hidden" : ""}`} alt="" />
    </>

  )
}

export default Image