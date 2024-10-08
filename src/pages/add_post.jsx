import { useState } from "react";
import PostForm from "../components/post_form";

const AddPost=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [userId, setUserId]=useState("1");
    const [isloading,setIsLoading] = useState(false)
    const handleSubmit= async (event)=>{
       event.preventDefault();
       if(title==""){
        alert("Please enter title.");
        return
       }
       if(title.length<=2){
        alert("Title too short.");
        return
       }
       if(description==""){
        alert("Please enter description.")
        return
       }
       if(userId==""){
        alert("Please enter user id")
        return
       }
       setIsLoading(true);
       try{
        const response= await fetch(
            "https://jsonplaceholder.typicode.com/posts",{
               method:"POST",
               body:JSON.stringify(
                {
                    title: title,
                    description: description,
                    userId: userId
                }
               ),
               headers:{
                "Content-Type":"application/json",
               },
            }
           );
           const data = await response.json();
           console.log("Title",title);
           console.log("Description",description);
           console.log("User Id",userId);
           console.log(data);
           alert("Post created successfully.");
       }
       catch(exception){
        alert("Something went wrongg")
       }
       setIsLoading(false);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Post</h1>
            {
                isloading && <p>Loading.......</p>
            }
            <PostForm 
              onChangeTitle={
                (e)=>setTitle(e.target.value)}
              onChangeDescription={
                (e)=>setDescription(e.target.value)
              }
              onChangeUserId={
                (e)=> setUserId(e.target.value)
              }
            />
        </form> 
    )
}
export default AddPost;