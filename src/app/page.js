"use client"
import { useEffect, useState } from "react"
import "./page.css"
import axios from "axios"
import Row from "./components/Row"
import Division from "./components/Division"

export default function Home() {

  let [userData,setData] = useState([])
  let [searchitem,setSearchitem] = useState("")
  let [searchedData,setSearchedData] = useState([])
  let [selectedRow,setSelectedRow] = useState(1)
  let [selectedRowId,setSelectedRowId] = useState()
  let [selectedRowDetails, setSelectedRowDetails] = useState()

  useEffect(()=>{
    axios.get("https://admin-panel-data-edyoda-sourav.vercel.app/admin/data")
    .then(res=>{
      setData(res.data),
      setSelectedRowId(res.data[selectedRow].id)
      setSelectedRowDetails(res.data[selectedRow])
    }
    )
    .catch(err=>console.log(err))
  },[])

  const ClickedRow = (id) =>{
    let selectedindex = userData.find(data => data.id == id)
    setSelectedRowId(id)
    setSelectedRowDetails(selectedindex)
  }

  const UpdateSearchValue=(e)=>{
  
    let searchValue = e.target.value
    let foundData = userData.filter((item) => item.firstName.toUpperCase().includes(searchValue.toUpperCase()))
    setSearchedData(foundData)
    console.log(foundData)
    setSearchitem(e.target.value)
  }


  console.log(userData)
  return (
    <main>

        <div id="table-section">

            <form action="/">
                {/* <img src='./img/search-icon.svg' alt="Search Icon" /> */}
                <input type="text" placeholder="Enter something" name="search-box" onChange={(e)=>UpdateSearchValue(e)} id="search-box" value={searchitem} />
            </form>

            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th class="column1">Id</th>
                                <th class="column2">FirstName</th>
                                <th class="column3">LastName</th>
                                <th class="column4">Email</th>
                                <th class="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>

                            {/* <tr class="data-row">
                                <td class="column1">28</td>
                                <td class="column2">Larisa</td>
                                <td class="column3">Llaneza</td>
                                <td class="column4">SCallison@non.org</td>
                                <td class="column5">(763)248-9034</td>
                            </tr> */}

                            {
                              searchitem==0 && searchedData.length ==0 ?
                              userData.map(item => <Row datas={item} key={item.id} selectedData={selectedRowId} Clicked={ClickedRow}/>) :
                              searchedData.map(item => <Row datas={item} key={item.id} selectedData={selectedRowId} Clicked={ClickedRow}/>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>

        {
          selectedRowDetails && <Division div ={selectedRowDetails}/>
        }

        {/* <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
            </div>
        </div> */}

    </main>
  )
}
