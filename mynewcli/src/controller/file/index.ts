import { exec } from "child_process"
import * as fs from 'fs'

export const main = async(Command:string,args:any,flags:any) =>{
    
    switch (Command) {
        case "AddFile":
            try {
            // const terminalCommand = `type nul > ${args.FileName}.${flags.extension}`;
            fs.writeFileSync(`${args.FileName}.${flags.extension}`,'')
            } catch (error) {
                console.error(error);
                
            }
            break;
        case "DeleteFile":
            try {
            // Use child_process.exec to run the terminal command
            fs.unlinkSync(args.FileName)
            } catch (error) {
                console.log(error);
                
            }
            break;
        case "WriteFile":
                try {
                    
                    const terminalCommand = `copy con ${args.FileName}.${flags.extension}`;
                // Use child_process.exec to run the terminal command
                console.log("Please Write text to add in file and do Ctrl+C to terminate and permanently save the file");
                exec(terminalCommand, (error: any, stdout: any, stderr: any) => {
                  if (error) {
                    console.error(`Error executing command: ${error.message}`);
                    return;
                  }
            
                  if (stderr) {
                    console.error(`Command stderr: ${stderr}`);
                    return;
                  }
                  
                  
                  console.log(`Command output: ${stdout}`);
                  
                })
                } catch (error) {
                    console.log(error);
                    
                }
                break;
            case "ReadFile":
                try {
                     const Words = fs.readFileSync(args.FilePath, flags.encoding?flags.encoding:'utf-8')
                     console.log(Words);
                     
                } catch (error) {
                    console.log(error);
                    
                }   
                 
              break;
            case "AddFolder":
                try {
                    
                    // const terminalCommand = `mkdir ${args.FolderName}`;
                // Use child_process.exec to run the terminal command
                  fs.mkdirSync(args.FolderName)
                } catch (error) {
                    console.log(error);
                    
                }
               break;
            case "DeleteFolder":
                try {

                    
                    // const terminalCommand = `rmdir ${args.FolderName}`;
                // Use child_process.exec to run the terminal command
                // console.log("Please Write text to add in file and do Ctrl+C to terminate and permanently save the file");
                  fs.rmdirSync(args.FolderName)
                  return "Nope"
                } catch (error) {
                    // console.log(error);
                    return error;
                }
               break;
            case "DeleteFullFolder":
                try {

                    
                    // const terminalCommand = `rmdir ${args.FolderName}`;
                // Use child_process.exec to run the terminal command
                // console.log("Please Write text to add in file and do Ctrl+C to terminate and permanently save the file");
                  fs.rmSync(args.FolderName,{recursive:true,force:true})
                } catch (error) {
                    console.log(error);
                }
               break;
        default:
            break;
    }
    
}