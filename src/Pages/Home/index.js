import React from 'react'
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import './Home.css'
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate() ; 
  let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    function onSuccess(args) {
        console.log("Ajax request successful");
    }
    function onFailure(args) {
        console.log("Ajax request has failed");
    }
    const goToDocs = () => {
      navigate('editdocs') ; 
    };

    const goToSheets = () => {
      navigate('editexcel') ; 
    };
  return (
    <>

<div className='heading'>
        <h2 style={{ fontWeight: 'normal',  textAlign : 'center'}}>My Documents</h2>
</div>

    <div className='docs' style={{marginTop: '40px' , textAlign : 'center'}}>
    <ButtonComponent cssClass="e-outline"  onClick={goToDocs}>Create a Document</ButtonComponent>
    <ButtonComponent cssClass="e-outline" style={{marginLeft: '200px'}} onClick={goToSheets} >Create a Spread Sheet</ButtonComponent>
  </div>
    <div className= 'control-section' style={{height: '650px', marginLeft: '40px', marginRight : '40px', marginTop: '45px'}}  >
        <FileManagerComponent height={650} id="file" view="LargeIcons" enablePersistence={true} ajaxSettings={{
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + "api/FileManager/GetImage",
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            url: hostUrl + "api/FileManager/FileOperations"
        }} success={onSuccess.bind(this)} failure={onFailure.bind(this)}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}  />
        </FileManagerComponent>
    </div>
    </>
  )
}

export default Home
