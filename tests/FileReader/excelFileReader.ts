import { Workbook, Worksheet } from 'exceljs'
export class ExcelReader {
    static async readExcel(filePath: string, sheetName: string): Promise<any[][]> {
        const workbook = new Workbook();
        await workbook.xlsx.readFile(filePath);
        const  worksheet: Worksheet | undefined = workbook.getWorksheet(sheetName);
        if (!worksheet) {
            throw new Error(`Sheet '${sheetName}' Not found in the Excel file.`);
        }
        const excelData: any[][] = [];
        worksheet.eachRow((row) => {
            const rowData: any[] = [];
            row.eachCell((cell) => {
                rowData.push(cell.value);
            });
            excelData.push(rowData);
        });
        return excelData;
    }
}