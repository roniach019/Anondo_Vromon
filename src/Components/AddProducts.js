import React,{useState} from 'react'
import {storage,fs} from '../Config/Config'

export const AddProducts = () => {

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [image, setImage]=useState(null);
    const [link, setLink]=useState(null);      //link ke declear kora hoilo

    const [imageError, setImageError]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');

    const types =['image/jpg','image/jpeg','image/png','image/PNG'];
    const handleProductImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    const handleAddProducts=(e)=>{
        e.preventDefault();
        // console.log(title, description, price);
        // console.log(image);
        const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Products').add({  // eikhane collection er icha moto id set korte hobe
                    title,
                    description,
                    category,
                    price: Number(price),
                    url,
                    link,    //link collection e thakar variable decleared
                }).then(()=>{ // ekhane collection er id ta nite hobe
                    setSuccessMsg('Product added successfully');
                    setTitle('');
                    setDescription('');
                    setCategory('');
                    setPrice('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                    //const a = Products.uid;
                }).catch(error=>setUploadError(error.message));
            })
        })
    }
  
    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Place</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>} 
            <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>
                <label>Visiting place</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Place Description</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                
                <label>Spot Category</label>
                <select className='form-control' required
                value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
                    <option value="">Select spot Category</option>                   
                    <option>Lake</option>
                    <option>Zoo</option>                    
                    <option>Sea beach</option>
                    <option>Old place</option>
                    <option>Forest</option>
                    <option>Park</option>   
               
                </select>
                <br></br>
                <label>Upload Place Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleProductImg}></input>

                <br></br>
                <label>Link</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setLink(e.target.value)} value={link}></input>

                <label>traveling cost </label>
                <input type="number" className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br>
                
                {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
                    
                </>}

        </div>
    )
}