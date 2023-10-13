import './tabitem.css'
const Tabitem=(props)=>{
  const{tabdetails,clickOnActiveTab}=props
  const{tabid,displaytext}=tabdetails
  const onClickTabItem=()=>{
    clickOnActiveTab(tabid)
  }
  return(
    <div className="btncontainer">
    <button type="button" onClick={onClickTabItem}>{displaytext}</button>
    </div>
  )
}
export default Tabitem