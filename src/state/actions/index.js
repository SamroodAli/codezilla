import {LOADING_VIDEOS,SET_VIDEOS} from "../action-types"

export const loadingVideos = ()=>({type:LOADING_VIDEOS})
export const setVideos = (videos)=>({type:SET_VIDEOS,payload:videos})