import './appitem.css'
const Appitem=(props)=>{
    const{appdetails}=props
    const{appname,imageurl,category}=appdetails
    return(
        <div className="imagecontainer">
        <img src={imageurl} alt="imagehere" className='imagi'  />
        <h4>{appname}</h4> 
        
        </div>
    )
}
export default Appitem