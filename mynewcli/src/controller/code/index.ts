// import OpenAI from "openai"

// const openai = new OpenAI();

import { exec } from "child_process"

export const main = async (CodeCommand:string,args: any) => {

  let Sucess = false;
  let message;

  switch (CodeCommand) {
    case "compileCPP":
      try {
        const terminalCommand = `g++ ${args.CodeFileName}.cpp -o ${args.CodeFileName}.exe`;
        // Use child_process.exec to run the terminal command
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
          
          Sucess = true;
          message = stdout;
        })
      } catch (error) {
        Sucess = false;
        message = error;
      }
      break;
    case "executeCPP":
      try {
        const terminalCommand =  `.\\${args.CodeFileName}.exe`;
        // Use child_process.exec to run the terminal command
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
          Sucess = true;
          message = stdout;
        })
      } catch (error) {
        Sucess = false;
        message = error;
      }
      break;
    case "compileJava":
      try {
        const terminalCommand =  `javac ${args.CodeFileName}.java`;
        // Use child_process.exec to run the terminal command
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
          Sucess = true;
          message = stdout;
        })
      } catch (error) {
        Sucess = false;
        message = error;
      }
      break;
    case "executeJava":
      try {
        const terminalCommand =  `java ${args.CodeFileName}`;
        // Use child_process.exec to run the terminal command
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
          Sucess = true;
          message = stdout;
        })
      } catch (error) {
        Sucess = false;
        message = error;
      }
      break;
    case "runJs":
      try {
        const terminalCommand =  `node ${args.CodeFileName}.js`;
        // Use child_process.exec to run the terminal command
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
          Sucess = true;
          message = stdout;
        })
      } catch (error) {
        Sucess = false;
        message = error;
      }
      break;
    default:
      console.log("You have Entered wrong Command");
      break;
  }
  return {Sucess,message};
}

// main();