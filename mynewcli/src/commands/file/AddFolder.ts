import {Args, Command,Flags} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/file/index.js'

export default class AddFolder extends Command {
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
    const {args, flags} = await this.parse(AddFolder)
    // console.log(args,flags );
    await main("AddFolder",args,flags);
    // this.log("Please Select A Command")
    // this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
