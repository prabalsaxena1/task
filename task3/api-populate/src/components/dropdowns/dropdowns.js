import axios from "axios";
import { useEffect, useState } from "react"

export const Products = () => {
    const [data, setData] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [bands, setBands] = useState([])
    const [isSubBandDisabled, setIsSubBandDisabled] = useState(true)
    const [name, setName] = useState("")
    const [band, setBand] = useState("")
    const [subBands, setSubBands] = useState([])

    useEffect(() => {
        const url = "http://s3.ap-south-1.amazonaws.com/ypui-resources/InterviewQns/Products.json"
        axios.get(url).then((res) => {
            const arr = res.data
            const refinedData = arr.map((product) => ({ productName: product.Productid.name, band: product.Band.val, subBand: product.Subband.val }))
            setData(refinedData)
        })
    }, [])

    let products = {}
    for (let index in data) {
        const productName = data[index].productName
        if (products[productName == undefined]) {
            products[productName] = 1
        }
        else {
            products[productName] += 1
        }
    }
    products = Object.keys(products)
    const productList = products.map((product, index) => (<option value={product} key={index}>{product}</option>))



    //handling bands
    const bandListHandler = (e) => {
        setName(e.target.value)
        setIsDisabled(false)
        let bandList = {}
        for (let i in data) {
            if (data[i].productName == e.target.value) {
                let band = data[i].band
                if (bandList[band] == undefined) {
                    bandList[band] = true
                }

            }
        }
        bandList = Object.keys(bandList)
        setBands(bandList)
    }

    const bandDropDown = bands.map((band, index) => (
        <option value={band} key={index}>{band}</option>)
    )

    //handling sub bands
    const subBandChangeHandler = (e) => {
        setBand(e.target.value)
        setIsSubBandDisabled(false)
        let subBandList = {}
        for (let i in data) {
            if (data[i].productName == name && data[i].band==e.target.value) {
                let subBand = data[i].subBand
                if (subBandList[subBand] == undefined) {
                    subBandList[subBand] = true
                }

            }
        }
        subBandList = Object.keys(subBandList)
        setSubBands(subBandList)

    }
    const subBandDropDown = subBands.map((subBand, index) => (
        <option value={subBand} key={index}>{subBand}</option>)
    )

    return (
        <>
            <select defaultValue="Select Product" onChange={(e) => bandListHandler(e)}>
                <option disabled="disabled">Select Product </option>
                {productList}
            </select>
            <select disabled={isDisabled} defaultValue="Select Band" onChange={(e) => subBandChangeHandler(e)}>
                <option disabled="disabled">Select Band </option>
                {bandDropDown}
            </select>
            <select disabled={isSubBandDisabled} defaultValue="Select Sub Band">
                <option disabled="disabled">Select Sub Band </option>
                {subBandDropDown}
            </select>
        </>
    )
}


//BAND DROPDOWN

