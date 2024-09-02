import toast from "react-hot-toast"

export const handleSubmit = (msg: string) =>{
    toast.success(msg)
}
export const handleError = (msg: string) =>{
    toast.error(msg)
}