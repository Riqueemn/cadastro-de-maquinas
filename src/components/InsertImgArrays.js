import React, {useState} from "react";
import './style.css';
import { Button, Row, Image, Container, Col } from 'react-bootstrap';





export default function InsertImgArrays() {



    const [Images, setImages] = useState([]);
    const [ind, setInd] = useState(0);

    const renderImages = () => {

        if (Images.length > 0) {
            return <Image src={Images[ind]} thumbnail className="Images" />;
        }
        
    }

    const proxImage = () => {
        console.log(Images.length)
        
        if ((ind + 1) <= (Images.length - 1)){
            setInd(ind + 1);
        }
        
    }

    const antImage = () => {
        if ((ind - 1) >= 0){
            setInd(ind - 1);
        }
    }
    
    const uploadImage = async (e) => {   
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImages(Images.concat(base64));
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

      
      return (
          <div>
            <div>
            <label className="block text-sm font-medium text-gray-700">
            Inserir imagem
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload</span>
                    <input onChange={(e) => {uploadImage(e);}} id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                </div>
            </div>
            </div>
        </div>
        

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Galeria
                </label>
                    
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-400 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        
                    </div>
                    <Container>
                        {renderImages()}
                    </Container>  
                </div>
            </div>
            <br/>
            <Button variant="danger" onClick={() => {antImage();}}>Anterior</Button><span> </span>
            <Button variant="primary" onClick={() => {proxImage();}}>Proximo</Button>
        </div>
      );

}