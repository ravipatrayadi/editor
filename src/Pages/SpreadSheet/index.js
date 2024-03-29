import React from 'react'
import {RangeDirective, RangesDirective, SheetDirective, SheetsDirective, 
    SpreadsheetComponent} from '@syncfusion/ej2-react-spreadsheet';
  import {defaultData} from './data';


const SpreadSheet = () => {
  return (
    <div style={{height : '730px', marginLeft : '40px' , marginRight: '40px'} }>
    <div className='heading'>
        <h2 style={{ fontWeight: 'normal',  textAlign : 'center'}}>Edit Sheet</h2>
    </div>
      <SpreadsheetComponent allowOpen={true}
        openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
        <SheetsDirective >
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
      )
}

export default SpreadSheet
