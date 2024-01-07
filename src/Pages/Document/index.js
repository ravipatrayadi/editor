import React from 'react'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);



const Document = () => {
  return (
    <div>

<div className='heading'>
        <h2 style={{ fontWeight: 'normal',  textAlign : 'center'}}>Edit Document</h2>
</div>
      <DocumentEditorContainerComponent id="container" height={'720px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>
    </div>
  )
}

export default Document
