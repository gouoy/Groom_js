const spreadSheetContainer = document.querySelector('#spreadsheet-container');

const ROWS = 10;
const COLS = 10; 
const spreadsheet = []; 

initSpreadsheet();

class Cell {
    constructor(isHeader, deisabled, data, row, column, active = false){
        this.isHeader = isHeader; 
    }
}
//class 인스턴스 객체로 많이 사용 . 비슷하지만 새로운 애들 
//=> cell1 = new Cell('')

function initSpreadsheet(){
    for(let i=0; i< ROWS; i++){
        let spreadsheetRow = [];
        for (let j = 0; j < COLS; j ++){
            spreadsheetRow.push(i + "-" + j); 
        }
        spreadsheet.push(spreadsheetRow); 
    }
}