import {Args, Command} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/code/index.js'

export default class Code extends Command {
  static args = { 
  CodeFileName:Args.string({description: 'File name over which operations to execute', required: true})}

  static description = "To run JS Code"

  static examples = [
    ".\bin\run code compileCPP [Filename]",
  ]

  static flags = {}

  async run(): Promise<void> {
    let {args} = await this.parse(Code);
    // console.log(args);
    
       await main("runJs",args);
    //  console.log(message);
     
  }
}
