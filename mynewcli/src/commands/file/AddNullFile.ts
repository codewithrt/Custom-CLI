import {Args, Command,Flags} from '@oclif/core'
import {exec} from "child_process"
import { main } from '../../controller/file/index.js'

export default class AddNullFile extends Command {
  static args = {
FileName:Args.string({description:"File name over which command to execute",required:true})
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
    extension: Flags.string({char: 'e', description: 'File Extension',required:true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(AddNullFile)
    // console.log(args,flags );
    await main("AddFile",args,flags);
    // this.log("Please Select A Command")
    // this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
