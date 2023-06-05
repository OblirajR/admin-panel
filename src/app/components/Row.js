const Row = (props) =>{

    const {datas, selectedData} = props

    return <div>
        <tr class={`data-row ${selectedData == datas.id ? 'active' : ''}`} onClick={()=>props.Clicked(datas.id)}>
            <td class="column1">{datas.id}</td>
            <td class="column2">{datas.firstName}</td>
            <td class="column3">{datas.lastName}</td>
            <td class="column4">{datas.email}</td>
            <td class="column5">{datas.phone}</td>
         </tr>
    </div>
}

export default Row