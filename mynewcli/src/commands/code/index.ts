import {Args, Command} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/code/index.js'

export default class Code extends Command {
  static args = {
  CodeFileName:Args.string({description: 'File name over which operations to execute', required: true})}

  static description = `Can Compile and Execute CPP - CPP ,Java and Js Files

compileCPP [filename] to compile CPP Files 
executeCPP [filename] to execute CPP Files
compileJava [filename] to compile Java Files
executeJava [filename] to compile Java Files
runJs [filename] to run Js Files

Be in Current folder of file
  `

  static examples = [
    ".\\bin\\run code compileCPP [Filename]",
  ]

  static flags = {}

  async run(): Promise<void> {
    let {args} = await this.parse(Code);
    // console.log(args);
    console.log("Please put a command");
    
      //  await main(args);
    //  console.log(message);
     
  }
}
