import React from 'react'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);



const Document = () => {
  return (
    <div>
      <DocumentEditorContainerComponent id="container" height={'800px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>
    </div>
  )
}

export default Document
