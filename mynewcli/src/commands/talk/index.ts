import {Args, Command} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/talk/index.js'
import { prompt } from '@oclif/core/lib/cli-ux/prompt.js'
import * as fs from 'fs'


export default class Talk extends Command {
  static args = {ToAsk:Args.string({description:"Write the query you want to ask ai",required:true})}

  static description = 'Say hello world'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  async run(): Promise<void> {
    const {args,flags} = await this.parse(Talk);
    // this.log('hello world! (./src/commands/hello/world.ts)')
    let result = await main(args);
    let ans = await prompt(`What do you want to do 
    1) Console - Type Console
    2) Create a File with content in it - Type File`);
     if(ans === "File" || ans == "file"){
         fs.writeFileSync("response",`${result.finish_reason}
         ${result.index}
         ${result.logprobs}
         ${result.message}`);
     }else {
        console.log(result);
     }
  } 
}
