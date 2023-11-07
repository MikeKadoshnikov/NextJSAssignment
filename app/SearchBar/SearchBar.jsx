import {useState, useEffect} from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="ApiContent">
                    <div className="iteminfo">
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <button>Add to Cart!</button>
                    </div>
                    <div className="itemimg">
                    <img style={{height:"150px"}} src={product.image} alt={product.title}/>
                    </div>
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }

    useEffect(fetchAPIData, [])

    function handleChange(event){
        setSearchString(event.target.value)
    }


    return <div>
        <h3>Search Bar</h3>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
    </div>
}