
import "./bookCards.css"
const BooKCards = ({data}) =>{

   

    
    const addToBookSelf = (data)=>{
        // console.log(data,"on click")
        // let items = data
    localStorage.setItem('myBookShelf',JSON.stringify(data) )
    }

    return(<div className="cards-outer">
        <div className="cards-text"><p>Book Title:</p><span>{data.title}</span></div>
        <div className="cards-text"><p>Author Name :</p><span>{data.author_name}</span></div>
        <div className="cards-text"><p>Edition Count :</p><span>{data.edition_count}</span></div>

        <button className="add-btns" onClick={(data)=>{addToBookSelf(data)}} >Add to Bookshelf</button>
        {/* //   console.log(data,"data from on card click") */}
        <button className="add-btns" onClick={()=>{
            //  window.localStorage.clear("myBookShelf")
             window.localStorage.removeItem("myBookShelf")

        }} >Add to clear</button>
    </div>)
}

export default BooKCards