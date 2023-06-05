const Division = (props) =>{
    let {div} = props
    return <div id="info-wrapper">
                <h1>Details</h1>
                <p>Click on a table item to get detailed information</p>
                <div id="info-content">
                    <div><b>User selected:</b>{div.firstName} {div.lastName}</div>
                    <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readonly>
                            {div.description}
                        </textarea>
                    </div>
                    <div><b>Address:</b> {div.address.streetAddress}</div>
                    <div><b>City:</b> {div.address.city}</div>
                    <div><b>State:</b> {div.address.state}</div>
                    <div><b>Zip:</b> {div.address.zip}</div>
                </div>
            </div>
}

export default Division