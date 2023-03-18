import axios from 'axios'
import { useContext, useEffect } from 'react';
import { ImageContext } from '../ImageContext';


function GetImages() {
    const {imageUrls,setImageUrls, pageNumber,queryString, hasMoreData,setHasMoreData,isLoading, setIsLoading} = useContext(ImageContext);

    const endpoint: string = 'https://api.unsplash.com/search/photos';
    const privateKey: string = 'ZVT8vLK5avNC3fkDyHgaQEV77PjpEtISUhhCUxfcdow';
    const imagesPerPage: number = 30;
    let responseUrls:string[] = []

    let config = {
        params:{
            client_id:privateKey,
            page:pageNumber,
            per_page: imagesPerPage,
            query: queryString
        }
    }

    useEffect(()=> {
        setIsLoading(true)
        console.log("sending data"+ pageNumber)
        axios.get(endpoint,config)
        .then(resp =>{
            responseUrls = imageUrls;
            resp.data.results.forEach((image:any) => {
                console.log(resp.status)
                responseUrls.push(image.urls.regular)
            })
            setImageUrls(responseUrls); 
            if(pageNumber < resp.data.total_pages){setHasMoreData(true); console.log("has more data")}
            else(setHasMoreData(false))
            setIsLoading(false)
        }).catch(err =>{
            console.log(err)
        })
    },[queryString, pageNumber])
    
    if(hasMoreData) return(<div>Loading images...</div>)
    return(<div></div>);
}

export default GetImages;