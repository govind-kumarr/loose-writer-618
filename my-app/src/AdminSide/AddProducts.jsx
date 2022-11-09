import React from 'react'
const startData={
      title: "",
      subTitle: "",
      price: "",
      category: "",
      type: "",
      image: "",
      rate: "",
      count: "",
      off: "",
      quantity:"",
      max_unit: "",
}
const AddProducts = () => {
    const [data,setData]=useState(startData)


  return (
    <div>
        <h1>AddProducts</h1>
        <div>
            <div>
                <form>
                    <div>
                        <label>Product Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Product Sub-Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Rate</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Count</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>off</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Max Unit</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProducts