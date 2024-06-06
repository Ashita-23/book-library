import { useEffect, useState } from "react"
import BooKCards from "./bookCards"
import "./homePage.css"


const HomePage =()=>{

const [allBookList,setallBookList]=useState("")
const [BookList,setBookList]=useState("")
const [inputText,setInputText]=useState("")
const [FilterBookListItems,setFilterBookListItems]=useState("")
console.log(BookList,"usestate data")
// console.log(inputText,"usestate inputText")
console.log(FilterBookListItems,"FilterBookListItems,")

const getBookList =async ()=>{
  const API= await fetch("https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1")
  const JsonRsult = await API.json()
//   console.log(JsonRsult)
  setallBookList(JsonRsult)
  setBookList(JsonRsult?.docs)
}

useEffect(()=>{
    getBookList()
},[])

useEffect(()=>{
    inputText && FilterBookList(inputText,allBookList)
},[inputText])

const FilterBookList = (inputText,allBookList)=>{
// console.log(inputText , "input text from filter fn")
// console.log(BookList.docs , "BookList from filter fn")

const filterItems = allBookList?.docs.filter(data=>data?.title?.toLowerCase().includes(inputText.toLowerCase()))
// console.log(filterItems,"filterItems")
return setBookList(filterItems)
// return setFilterBookListItems(filterItems)
}





return(<div className="main-box">
<nav className="nav-box">
<p className="nav-title">Search By book name : </p>
{/* <div className="form-outer"> */}
<form className="input-form" action="" onSubmit={(e)=>{e.preventDefault()}}>
    <input type="text" placeholder="Search here" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
    {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
    <button className="add-to-self">My Bookshelf</button>
    </form>
    {/* </div> */}
</nav>
<div className="cards-box">

  {
    BookList && BookList?.map(data=><BooKCards data={data} key={data?.author_key}/>)
}   
{/* {
    FilterBookListItems && FilterBookListItems?.map(data=><BooKCards data={data} key={data?.author_key}/>)
}  */}

{/* <BooKCards data={BookList.docs[0]} /> */}
</div>
</div>)
}
export default HomePage