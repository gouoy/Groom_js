const spreadSheetContainer = document.querySelector('#spreadsheet-container');

const ROWS = 10;
const COLS = 10; 
const spreadsheet = []; 
const alphabets = ["A","B","C","D","E","F","G","H","I","J"]

class Cell {
    constructor(isHeader, disabled, data, row, column, rowName, columnName, active = false){ 
        this.isHeader = isHeader; 
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.rowName = rowName;
        this.columnName = columnName; 
        this.active = active;   // 다양한 값을 가지기 위해 각 칸들 모두를 객체로 변경
    }
}
initSpreadsheet();
// const cell1 = new Cell(true, false, '1', 1);
//class 인스턴스 객체로 많이 사용 . 비슷하지만 새로운 애들 
//=> cell1 = new Cell('')

function initSpreadsheet(){ // data 만드는 곳 
    for(let i=0; i< ROWS; i++){
        let spreadsheetRow = [];
        for (let j = 0; j < COLS; j ++){
            let cellData =''; // 칸 안 데이터 비어있어야 하니! 
            let isHeader = false ; 
            // isHeader 가 true 일 때 배경색 
            let disabled = false ; 
            if(j === 0){
                cellData = i;
                isHeader = true; 
                disabled = true; 
            }
            if(cellData<=0){
                cellData = "";
                isHeader = true; 
                disabled = true;
            }
            if(i===0){
                cellData = alphabets[j-1];  
                isHeader = true; 
                disabled = true;
            }
            if(!cellData){
                cellData = "";
            }
            const rowName = i;
            const columnName = alphabets[j-1]; 
            // undefined 가 나오는 [0,0]을 처리해보자. ->cell
            const cell = new Cell(false, false,cellData,i,j,rowName, columnName, false); //인스턴스 객체 생성 
            spreadsheetRow.push(cell); 
        }
        spreadsheet.push(spreadsheetRow); 
    }
    drawSheet();
    console.log("spreadsheet",spreadsheet);
}
function createCellEl (cell){
    const cellEl = document.createElement("input");
    cellEl.className = "cell"; 
    cellEl.id = "cell_" + cell.row + cell.column;
    cellEl.value = cell.data; 
    cellEl.disabled = cell.disabled; 
    if(cell.isHeader){
        cellEl.classList.add("header"); 
    }
    return cell  
}
function handleCellClick(cell){
    console.log("clicked cell", cell);
    const columnHeader = spreadsheet[0][cell.column]; 
    const rowHeader = spreadsheet[cell.row][0]; 
    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.)
}
functino clearHeaderActiveStates(){
    const headers = document.querySelectorAll('.header');
    // headers.map(); // 배열x collection 0 
    headers.forEach((header)=>{
        header.classList.remove(); 
    })
}
function getElFromRowCol(row,col){
    return document.querySelector("#cell_"+row+col)
}

function drawSheet(){
    for(let i=0; i<spreadsheet.length;i++){
        const rowContainerEl = document.createElement("div"); 
        rowContainerEl.className = "cell-row";
        for(let j=0; j< spreadsheet[i].length;j++){ 
            //객체 데이터 만들어줘야함!! 
            const cell = spreadsheet[i][j]
            spreadSheetContainer.append(createCellEl(cell)); 
        }
        spreadSheetContainer.append(rowContainerEl); 
    }
}
