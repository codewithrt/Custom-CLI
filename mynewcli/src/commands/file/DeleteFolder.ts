import {Args, Command,Flags} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/file/index.js'
import { prompt } from '@oclif/core/lib/cli-ux/prompt.js'

export default class DeleteFolder extends Command {
  static args = {
   FolderName:Args.string({description:"Folder Name",required:true})
}

  static description = `Commands to be Executed Over file
   AddNullFile [Filename] -e [extension]
  `

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(DeleteFolder)
    // console.log(args,flags );
    let res = await main("DeleteFolder",args,flags)
    if( res !== undefined && res !== "Nope"){
        let result = await prompt("The Directory is Non Empty Do you still want to delete the complete Directory (Y/N)");
        // console.log(result);
        if(result === "Y" || result == "y"){
           await main("DeleteFullFolder",args,flags);
        }else{
          return;
        }
    }
    // this.log("Please Select A Command")
    // this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
