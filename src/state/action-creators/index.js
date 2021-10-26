import {SEARCH_VIDEOS} from "../action-types"
import youtube from "../../api/youtube"


export const searchVideos = (term)=>{
  return async(dispatch)=>{
    try {
      const {data} = await youtube.get("/search",{
        params:{
          q:term
        }
      });
    }catch(err){
      console.error(err)
    }
  }
}