import React, { useEffect, useState } from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({ products: data.products})
        })
    }

    render() {
        const style = {
            display:"flex",
            height:"8rem"
        }
        return (
            <>
            {
                this.state.products.map((item, index) =>(
                    <React.Fragment key={index}>
                        <img src={item.thumbnail} alt="Product" loading="lazy" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div style={style}>
                            {item.images.map((img, ind)=>(
                                <img src={img} key={ind} loading="lazy" />
                            ))}
                        </div>
                        <br />
                    </React.Fragment>
                ))
            }
            </>
        );
    }
}

function App2(props){
    // console.log(props);
    const [count, setCount] = useState(0);

    useEffect(() =>{
        let list = document.getElementById("list")
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data)=>{
            data.products.map((item)=>{
                console.log(item)
            })
        });
    },[]);
    return(
        <>
        {/* <h1>hello {count}</h1>
        <button onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(count+1)}>+</button> */}

        <div id="list">
            
        </div>
        </>
    );
}
export default App2;